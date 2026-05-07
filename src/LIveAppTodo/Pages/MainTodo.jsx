import React, { useState } from "react";
import TodoButton from "../components/TodoButton";
import TodoInput from "../components/TodoInput";
import TodoUl from "../components/TodoUl";
import BasicModal from "../components/BasicModal";

const MainTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (inputValue) => {
    if (inputValue) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
    }
  };

  const deleteTodos = (id) => {
    const deleteTodo = todos.filter((t) => t.id !== id);
    setTodos(deleteTodo);
    console.log("delete");
  };

  const updateTodo = (id, newText) => {
    const todoUpdate = todos.map((t) => t.id === id ? {...t, text: newText} : t);
    setTodos(todoUpdate);
  };

  return (
    <div className="bg-gradient-to-r flex flex-col items-center liner-gradinent-from-cyan-500 to-blue-500 rounded-xl pb-25 mt-10">
      <h1 className="font-bold italic text-2xl">Todo List for live coding</h1>
      <div className=" w-200">
        <div className=" flex  justify-center   gap-5 items-center mt-20">
          <TodoInput addTodo={addTodo} />
        </div>
        <TodoUl todos={todos} deleteTodos={deleteTodos} updateTodo={updateTodo} />
      </div>
    </div>
  );
};

export default MainTodo;
