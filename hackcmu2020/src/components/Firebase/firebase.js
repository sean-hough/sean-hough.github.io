import app from 'firebase/app';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBGXOZiYUn_yMSrZmiAxDZKXAryzwzYEdg",
    authDomain: "hackcmu2020-d7d2a.firebaseapp.com",
    databaseURL: "https://hackcmu2020-d7d2a.firebaseio.com",
    projectId: "hackcmu2020-d7d2a",
    storageBucket: "hackcmu2020-d7d2a.appspot.com",
    messagingSenderId: "836518917843",
    appId: "1:836518917843:web:36cb7f912a49cac7e14626",
    measurementId: "G-BWYXKGHBQW"
  };    

export default class Firebase {  
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth()
        
    }
    getUser = () => this.auth.currentUser

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
 
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
 
    doSignOut = () => this.auth.signOut();
 
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
