import React, { Component } from 'react';
import Firebase, { FirebaseContext } from './Firebase';
import './Login.css';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

const SignInPage = () => (
    <div>
      <FirebaseContext.Consumer>
      {firebase => <SignInForm firebase={firebase} />}
    </FirebaseContext.Consumer>
    </div>
  );

class SignInForm extends Component {
    constructor(props) {
      super(props);

      this.state = { ...INITIAL_STATE };
    }

    handleUp(event) {
        const { email, password } = this.state;
 
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }
   
    onSubmit = event => {
        const { email, password } = this.state;
 
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });
 
    event.preventDefault();
    }
   
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
   
    render() {
        const {
            email,
            password,
            error,
          } = this.state;
      return (
        <div>
          <div class="loginbox">
              <h1>Login Here</h1>
                   <form onSubmit={this.onSubmit}>
                     <p> Email </p>
                     <input
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Enter Email"
                        />
                      <p> Password </p>
                      <input
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Enter Password"
                        />
                     <br/>
                     <input type="submit" name="" value="Login"/>
                     <input type="submit" onClick={this.handleUp.bind(this)} name="" value="Register"/>

                       {error && <p>{error.message}</p>}
                     </form>
                 </div>
             </div>
        
            
 
      );
    }
}

export default SignInPage;
 
export { SignInForm };


/* <button type="submit">Sign In</button> */
// export default class Login extends React.Component {
//     render () {
//         return (
//             <div>
//                 <div class="loginbox">
//                     <h1>Login Here</h1>
//                     <form>
//                     <p> Username</p>
//                     <input type="text" name="" placeholder="Enter Username" />
//                     <p> Password</p>
//                     <input type="password" name="" placeholder="Enter Password"/>
//                     <br/>
//                     <input type="submit" name="" value="Login"/>
//                     <input type="submit" name="" value="Sign Up"/>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
