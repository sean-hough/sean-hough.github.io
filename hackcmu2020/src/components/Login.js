import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';

export default class Login extends React.Component {
    render () {
        return (
            <div>
                <div class="loginbox">
                    <h1>Login Here</h1>
                    <form>
                    <p> Username</p>
                    <input type="text" name="" placeholder="Enter Username" />
                    <p> Password</p>
                    <input type="password" name="" placeholder="Enter Password"/>
                    <br/>
                    <input type="submit" name="" value="Login"/>
                    <input type="submit" name="" value="Sign Up"/>
                    </form>
                </div>
            </div>
        )
    }
}
