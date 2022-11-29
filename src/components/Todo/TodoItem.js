import React from "react";
import { Check } from "../Check/Check";
import { BsTrash, BsFillFileImageFill } from "react-icons/bs";
import moment from "moment";
import { SelectedFile } from "../SelectedFile/SelectedFile";

/** Переменная для приведения даты к одному формату */
const FORMAT = "DD-MM-YYYY";

const TodoItem = ({ todo, changeTodo, removeTodo, todos, setTodos }) => {
  /** деструктуризация массива для упрощения работы с датой */
  const { currentDate } = todo;
  const day = moment(currentDate).format(FORMAT);

  /** функция для добавления файлов к задаче
   * находим нужный элемент методом findIndex
   * создаем копию массива
   * меняем элемент в массиве на полученый элемент
   * вызываем setTodos с измененным массивом
   */
  const addFile = (id, todo) => {
    const index = todos.findIndex((x) => x.id === id);
    const copy = [...todos];
    copy[index] = todo;
    setTodos(copy);
  };
  /** функция onChange для input
   * передаем полученный файл
   * вызываем функцию addFile
   * в качестве параметров передаем id выбранного элемента и массив с измененным полем file
   */
  const handleFileInput = (files) => {
    addFile(todo.id, {
      ...todo,
      file: files,
    });
  };

  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl p-5 w-full bg-gray-800">
      <button onClick={() => changeTodo(todo.id)} className="flex items-center">
        <Check isCompleted={todo.isCompleted} />
        <span className={`${todo.isCompleted ? "line-through" : ""}`}>
          {todo.title}
        </span>
      </button>
      <div>
        <span>
          <p className="text-gray-500 text-sm">
            Description: {todo.description}
          </p>
        </span>
        <span className="text-sm text-gray-500 ">Date: {day}</span>
      </div>

      <div className="flex p-1">
        <SelectedFile
          handleFileInput={handleFileInput}
          todo={todo}
          setTodos={setTodos}
        />
        {todo.file ? (
          <button className="pr-1">
            <BsFillFileImageFill size={22} className="text-pink-900" />
          </button>
        ) : (
          ""
        )}
        <button onClick={() => removeTodo(todo.id)}>
          <BsTrash size={22} className="text-pink-900" />
        </button>
      </div>
    </div>
  );
};

export { TodoItem };
