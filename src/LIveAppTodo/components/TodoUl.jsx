import React from 'react'
import { CiEdit } from "react-icons/ci";  
import { CiTrash } from "react-icons/ci";
import BasicModal from './BasicModal';

const TodoUl = ({todos, deleteTodos, updateTodo}) => {



  return (
<>

{ todos.map((todo)=>(
   <ul key={todo.id} className="flex justify-between items-end text-left ml-35 mt-10 text-white border-b-2 pb-1 pl-5 transition-all ease-in duration-300 hover:bg-gray-700 rounded-xl">
       <span>{todo.text}</span>
    <span className="flex gap-4 relative h-6 items-center" >
      <div className="relative flex items-center justify-center w-6 h-6">
        <BasicModal  todos={todo} updateTodo={updateTodo} />
      </div>
      <div className="relative flex items-center justify-center w-6 h-6">
        <CiTrash onClick={() => deleteTodos(todo.id)} className="absolute size-7 hover:text-gray-200 hover:size-10 transition-all ease-in duration-300 cursor-pointer" />
      </div>
    </span>
  </ul>
))}
</>
  )
}

export default TodoUl
