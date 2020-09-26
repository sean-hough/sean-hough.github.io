import React, { usestate } from 'react';
import './App.css';
import  { FirebaseContext } from './Firebase';
import Login from './Login'  
// import TodoList from './TodoList'
  
  export default class App extends React.Component {
    authListener() {
      this.props.firebase.auth.onAuthStateChanged((user) => {
        this.setState({"User" : user})
      });
    }  
    componentWillMount() {
      this.authListener = this.authListener.bind(this);
      this.authListener();
    }  
    constructor(props) {
      super(props);
      this.state = { User: this.props.firebase.getUser() };
      props.firebase.auth.onAuthStateChanged(function(user) {
        this.setstate(user)        
      }); 
    }    

    render() {
      if (this.state["User"] == null) {
        return (<Login/>);
      }
      else {
        // PUT MAIN PAGE COMPONENTS HERE
        return this.state["User"]["email"]
      }
    }
  }

  
// function Todolist() {
//   const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
//   //first variable is every single todo in the array
//   //second variable is the function that we call to update todos
  
//   //passing the todos we made to our todo list
//   return (
//     <>
//       <TodoList todos = {todos} />
      
//       <input type="text" />
//       <button> Add Todo </button>
//       <button> Clear Completed Todos </button>
//       <div> 0 left to do </div>
//     </>
//   )
// }

// // export deafult App;
  
//   // ========================================