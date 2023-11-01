import React from 'react'
import Form from '../../components/form'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/conFig';

const SignUp = () => {
  const signUpUser = ( email, password) => {
    createUserWithEmailAndPassword(auth,email, password)
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
      <Form signUp  signUpUser = {signUpUser} ></Form>
    </div>
  )
}

export default SignUp