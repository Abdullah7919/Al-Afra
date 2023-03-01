import Register from '../components/Register'
import Login from '../components/Login'
import firebase from 'firebase/compat/app';
import React, { Component } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import Header from "../components/Header"
import Footer from '../components/Footer';


const firebaseConfig = {
    apiKey: "AIzaSyAaCFhD3O-tjjMkwgm-dNo0i00kEKUmF0Q",
    authDomain: "apr-survey.firebaseapp.com",
    databaseURL: "https://apr-survey-default-rtdb.firebaseio.com",
    projectId: "apr-survey",
    storageBucket: "apr-survey.appspot.com",
    messagingSenderId: "379544020020",
    appId: "1:379544020020:web:8674117453a882e6471661"
  };
  
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  
}





class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      auth : 0,
      //page: 0 - login, page: 1 = regist
       page: 1,
       message:"",
       // type 0 - error, 1- success 
       type: 1,
    }
  }

  

  pageSwitchHandler = (e) =>{
    this.setState({page:!this.state.page, message: null})
    e.preventDefault();
  }

  registrationhandler = (event) =>{
    event.preventDefault();
    const name = event.target.name.value; 
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password !== confirmPassword){
      this.setState({message:"password doesn't match",type:0})
      return;
    } else{
      this.setState({message:"", type:1})
    }
    const auth = getAuth()

    const authPromise = createUserWithEmailAndPassword(auth, email, password)
    authPromise.then((data)=> {
      if (data.user.emailVerified=== true){
      this.setState({message:"User registerd successfully", type:1})
      } else{
        this.setState({message:"email not verified", type:0})
      }

    }).catch((error) =>{
      this.setState({message:error.message, type:0})
    });
  }
  loginHandler = (event) =>{
    event.preventDefault()
    const auth = getAuth()
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((data)=>{
      this.setState({message:"user login successful", type: 1})
    }).catch((error)=>{
      this.setState({message:error.message, type: 0})
    })

  }


  render() {
    return (
      <div>
        <Header/>
        {this.state.page ?
         <Register
          switch={this.pageSwitchHandler}
          register={this.registrationhandler}
          message={this.state.message} 
          type={this.state.type}
         />
         : <Login
            switch={this.pageSwitchHandler}
            login ={this.loginHandler}
            message={this.state.message}
            type={this.state.type}
            />
            
        }
        <Footer/>
      </div>
    )
  }
}

export default App;