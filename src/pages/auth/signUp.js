import React from 'react'
import Form from '../../components/form'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set  } from "firebase/database";
import { auth, database} from '../../firebase/conFig';

const SignUp = () => {
  const signUpUser =  (firstName,lastName, email, password) => {
    const fullName = firstName+lastName
    createUserWithEmailAndPassword(auth,email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    //  console.log(user)
    alert("User Sucessfully created")
      set(ref(database, `users/${user.uid}`), {
        userName:fullName,
        email:email,
        password:password
      });

    
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