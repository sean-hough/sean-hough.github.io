import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import  { FirebaseContext } from './Firebase';
import Login from './Login'  
import TodoList from './TodoList';
//library that allows us to create random ids for our todos
import uuidv4 from 'uuid/v4'

/*
  export default class App extends React.Component {
    render() {
      return (
        <div>
            <FirebaseContext.Consumer>
            {firebase => {if (firebase.getUser() == null) {
                                return ( <Login/> )
                             } else {
                                 return (<p>hello world</p>)
                             }
                            }
                }
            </FirebaseContext.Consumer>
            <TodoList />
        </div>
        );
    }
  }
  */
 const LOCAL_STORAGE_KEY = 'todoApp.todos'
//need to very much change this to make it a react function/compatable with what we already have
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  //what is the difference between using the name ref and the hours ref
  //need to make input hours correspond with the titles and show up
  const todoHoursRef = useRef()
  //any time our array of todos changes, we want to save our todos to local storage
  //this will preserve todo tasks when we refresh the page
  
  //even tho we have todos saved, we need to display them
  useEffect(() => {
    //only call this function once -- right when our component loads
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  //this function saves our todos to local storage upon refreshing
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  //first variable is every single todo in the array
  //second variable is the function that we call to update todos
  

  //need to come up with a way to use this function -- need to pass into todolist
  function toggleTodo(id) {
    //creating a copy of our todos, modifying it, and then using that copy to set the new state
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
  
  
  
  //passing the todos we made to our todo list
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    const hours = todoHoursRef.current.value
    //const hours = todoHoursRef.current.value
    if (name === '') return 
    if (hours === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, hours: "    || hours left for task: " + hours, complete: false}]
    })
    //logs the names of todos that we have added to our console on the website
    todoHoursRef.current.value = null
    todoNameRef.current.value = null //clears our input after we hit add todo
    //take previous todo, add our new todo, and set new todos to that todo list
    //we need to have access to the name typed into the "Add Todo" field
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos = {todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <input ref={todoHoursRef} type = "text" />
      <button onClick={handleAddTodo}> Add Todo </button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do </div>
    </>
  )
}

export default App;
  
  // ========================================