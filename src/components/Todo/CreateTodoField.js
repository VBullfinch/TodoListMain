import React, { useState } from "react";

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  /** функция для добавления элементов
   * вызываем setTodos и передаем в него новый объект на основе предыдущего
   * записываем новые значения
   */
  const addTodo = (title, description, currentDate) => {
    setTodos((prev) => [
      {
        id: new Date(),
        title,
        isCompleted: false,
        description,
        currentDate,
      },
      ...prev,
    ]);
    /** вызываем эти функции для очистки полей */
    setTitle("");
    setDescription("");
    setCurrentDate("");
  };

  /** функция для вызова addTodo при помощи кнопки enter */
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && title.length !== 0) {
      /**проверяем нажал ли пользователь клавишу enter и ввел значение в поле title  */

      addTodo(title, description, currentDate);
    }
  };

  /** функция для вызова addTodo при нажатии на button */
  const handleClick = (e) => {
    if (title.length !== 0) {
      /** проверка на заполнение поля title */
      addTodo(title, description, currentDate);
    }
    return;
  };
  return (
    <div>
      <h2 className="text-xl font-bold text-center p-5">Create new task</h2>
      <div className="flex items-center justify-between mb-3 rounded-2xl p-5 w-full border-zinc-800 border-2 px-5 py-3 w-full">
        <input
          className="bg-transparent w-full outline-none"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          onKeyDown={handleKeyDown}
          placeholder="Add a task"
        />
      </div>
      <div className="flex items-center justify-between mb-4 rounded-2xl p-5 w-full border-zinc-800 border-2 px-5 py-3 w-full">
        <input
          className="bg-transparent w-full outline-none"
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          onKeyDown={handleKeyDown}
          placeholder="Add a description"
        />
      </div>
      <div className="flex items-center justify-between mb-4 rounded-2xl p-5 border-zinc-800 border-2 px-5 py-3 w-min">
        <input
          className="bg-transparent outline-none"
          type="date"
          onChange={(e) => setCurrentDate(e.target.value)}
          value={currentDate}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        className=" ml-2 inline-block rounded-lg bg-pink-900 px-3 py-1 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-900 hover:bg-indigo-700 hover:ring-indigo-700"
        onClick={handleClick}
      >
        Send
      </button>
    </div>
  );
};
export { CreateTodoField };
