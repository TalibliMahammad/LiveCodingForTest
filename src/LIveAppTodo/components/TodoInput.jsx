import React, { useState } from "react";
import TodoButton from "./TodoButton";

const TodoInput = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      addTodo(inputValue );
      setInputValue("");
      console.log("testinput")

   
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-5 items-center">
      <input
        className="bg-white h-10 w-100 rounded-xl p-5 text-black placeholder:text-gray-400
 placeholder:italic placeholder:text-sm 
 placeholder:font-semibold 
 placeholder:tracking-wide placeholder=Add Todo"
        placeholder="Add Todo"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
       
        />  
            <TodoButton addTodo={addTodo} />
    </form>
  );
};

export default TodoInput;
