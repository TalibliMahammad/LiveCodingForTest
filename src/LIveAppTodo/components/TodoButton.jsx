import React from 'react'

const TodoButton = ({addTodo}) => {
  return (
    <div>
        <button className= ' font-bold rounded-xl bg-blue-400 text-sm py-2 px-4 text-white' onClick={() => addTodo("")}>Add Todo</button>
    </div>
  )
}

export default TodoButton
