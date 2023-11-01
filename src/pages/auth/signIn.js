import React from 'react'
import Form from '../../components/form'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/conFig'
const SignIn = () => {
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
     console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    console.log(errorMessage);
    });
  }
  return (
    <div>
        <Form signInUser={signInUser}></Form>
    </div>
  )
}

export default SignIn