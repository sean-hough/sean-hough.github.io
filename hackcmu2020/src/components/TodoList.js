import React from 'react';


export default function TodoList( {todos} ) {
    return (
        todos.map(todo => {
            return <Todo todo = {todo} />
        })
    )
}


