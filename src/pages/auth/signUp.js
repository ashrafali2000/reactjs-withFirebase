import React from 'react'
import Form from '../../components/form'
import { auth, dbRealTime, dbFireStore, setDoc,doc,createUserWithEmailAndPassword, ref, set } from '../../firebase/conFig';

const SignUp = () => {
  const signUpUser =  (firstName,lastName, email, password) => {
    const fullName = firstName+lastName
    createUserWithEmailAndPassword(auth,email, password)
    .then( async (userCredential) => {
      const user = userCredential.user;
    //  console.log(user)
    alert("User Sucessfully created")

    //(i)  REAL TIME DATABASE WITH FIRBASE
      // set(ref(dbRealTime, `users/${user.uid}`), {
      //   userName:fullName,
      //   email:email,
      //   password:password
      // });


      //(ii) FIRE STORE DATABASE
      // SET Data
      await setDoc(doc(dbFireStore, "users", user.uid), {
        name: fullName,
        email: email,
        password: password
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