import React from 'react';
import './Login.css';
import Logo from './images/class-notes-logo-2.png';
import {Button} from '@material-ui/core';
import {auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login(){
const [state, dispatch] = useStateValue();

const signIn = (event) => {
  auth.signInWithPopup(provider)
  .then(result => {
    dispatch({
      type: actionTypes.SET_USER,
      user: result.user,
    })
  })
  .catch((error)=>{
    alert(error.message);
  })
}



  return(
    <div className='login'>
      <div className='login-container'>
        <img src={Logo} alt=''></img>
        <h1>Sign in to Code Notes Chat</h1>
        <Button onClick={signIn}>Sign in with Google</Button>

      </div>
    </div>
  )
}

export default Login;
