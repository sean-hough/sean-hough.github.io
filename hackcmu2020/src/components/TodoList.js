import React from 'react';
import Todo from './Todo';

//we are making keys unique -- react will only rerender changing components in array
export default function TodoList ( {todos, toggleTodo} ) {
    return (
        //notice that now we are passing both the todo and toggle todo functions
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo = {todo} />
        })
    )
}

