import React, { useState, useEffect } from "react";
import { TodoItem } from "../Todo/TodoItem";
import { CreateTodoField } from "../Todo/CreateTodoField";
import moment from "moment";

/** Переменная для приведения даты к одному формату */
const FORMAT = "DD-MM-YYYY";

/** переменная для хранения сегодняшней даты */
const TODAY = moment();

/** Массив объектов TODO */
const data = [
  {
    id: 456879,
    title: "wash",
    isCompleted: false,
    description: "wash pool in your room",
    currentDate: new Date(2022, 11, 26),
    file: "",
  },
  {
    id: 789654,
    title: "read",
    isCompleted: false,
    description: "read the book",
    currentDate: new Date(2021, 6, 16),
    file: "",
  },
  {
    id: 45687,
    title: "clean",
    isCompleted: false,
    description: "clean bathroom",
    currentDate: new Date(2022, 6, 16),
    file: "",
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data); /** глобальное состояние  */

  /** вызов UseEffect для проверки срока выполнения */
  useEffect(() => {
    checkDate();
  }, [TODAY]);

  /** функция для проверки даты выполнения
   *перебираем массив задания
   *для каждого задания выполняем функцию сравнения даты
   *вызываем функцию которая изменяем статус выполнения
   */
  const checkDate = () => {
    todos.map((todo) => {
      if (!compareDate(todo.currentDate)) {
        changeTodo(todo.id);
      }
    });
  };

  /** функция для изменения статуса выполнения
   * создаем копию массива
   * находим в клонированном массиве элемент
   * меняем поле isCompleted
   * вызываем функцию setTodos с измененым клоном массива
   */
  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  /** функция удаления элемента массива
   * при помощи метода filter перебираем массив
   * находим элемент по id
   * вывываем setTodos
   */
  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };

  /** функция сравнения дат
   * задаем формат даты переменной FORMAT
   * сравниваем методом isAfter с сегодняшней датой
   * возвращаем boolean значение
   */
  const compareDate = (dateFinish) => {
    return moment(dateFinish, FORMAT).isAfter(TODAY);
  };

  return (
    <div className=" text-white mx-auto bg-gray-900 h-screen">
      <h1 className="text-2xl font-bold text-center p-8">Todo List</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          changeTodo={changeTodo}
          compareDate={compareDate}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};
export { Home };
