import React from 'react';
import { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const firebaseIntitalize = () =>{ 
        if(firebase.apps.length === 0){
         firebase.initializeApp(firebaseConfig);
        }
    }
    firebaseIntitalize()

    

  const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [ user, setUser] = useState({
        name: '',
        password: '', 
        email: ''
    })
    const [showLogin , setShowLogIn] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
 


    const handleBlar = (e) =>{
        console.log(e.target.value)
        let isInputValid;
        if(e.target.name === 'name'){
            isInputValid = true
        }
        if(e.target.name === 'email'){
            const value = e.target.value;
            isInputValid = /^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$/.test(value)  
        }
        if(e.target.name === 'password'){
            const hasNumber = /\d{1}/.test(e.target.value)
            const lengthLimit = e.target.value.length > 5
            isInputValid = hasNumber && lengthLimit
        }
        if(isInputValid){
            const newUser = {...user};
            newUser[e.target.name] = e.target.value
            setUser(newUser)
        }
    }
    const handleSubmit = (e) =>{
        if(user.isSignup){
             firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
            const newUser = {...user};
            setUser(newUser)
            setSignedInUser(res.user)
            history.replace(from);
        })
        .catch(function(error) {
            console.log(error.message);
            
          });   
        } 
    


        e.preventDefault();
    }
    const handeGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
          .then(res=>{
               const {displayName,email} = res.user;
              const newUser = {...user}
              newUser.name = displayName;
              newUser.email = email;
              setUser(newUser)
              setSignedInUser(res.user);
              history.replace(from);
          })
          
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            
          });
    }
    const handleCreateAccount = () =>{
        setShowLogIn(true)
    }
    console.log(signedInUser)
    return (
        <div className = 'text-center'>
           {
           !showLogin &&    
            <div>
             <button onClick={handeGoogleSignIn}>Continue with Google</button>
             <p>Don't have and account? <a onClick={handleCreateAccount}>Create an account</a></p>
             </div>
             }
          { showLogin && <form onSubmit ={handleSubmit}>
               {user.isSignup && <input onBlur={handleBlar} type="text" name="name" id="" placeholder='Enter your Name'/>
               } <br/>
                <input onBlur={handleBlar} type="text" name="email" id="" placeholder='Enter your Email'/>
                <br/>
                <input onBlur={handleBlar} type="text" name="password" id="" placeholder='Enter your Password'/>
                <br/>
                <input type="submit" value ="Sing up" />
            </form>}
           
        </div>
    );
};

export default Login;