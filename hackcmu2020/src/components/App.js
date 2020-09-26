import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import  { FirebaseContext } from './Firebase';
import Login from './Login'  
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
  
  // ========================================