import React from 'react'
//import Todo from './Todo'
export default function Todo( {todo, toggleTodo} ) {
    //cannot directly pass in toggleTodo function because we will need to reference an id to toggle the correct todo
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
                {todo.name}
                {todo.hours}
            </label>
        </div>
    )
}
