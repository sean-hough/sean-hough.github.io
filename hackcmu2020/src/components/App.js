import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import  { FirebaseContext } from './Firebase';
import Login from './Login'  

  export default class App extends React.Component {
    count = 0
    render() {
      return (
        <div>
            <Login/>
        </div>
        );
    }
  }
  
  // ========================================