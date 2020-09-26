import React, { usestate } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import  { FirebaseContext } from './Firebase';
import Login from './Login'  
import TodoList from './TodoList'
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
        </div>
        );
    }
  }

  
function Todolist() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  //first variable is every single todo in the array
  //second variable is the function that we call to update todos
  
  //passing the todos we made to our todo list
  return (
    <>
      <TodoList todos = {todos} />
      
      <input type="text" />
      <button> Add Todo </button>
      <button> Clear Completed Todos </button>
      <div> 0 left to do </div>
    </>
  )
}

// export deafult App;
  
  // ========================================