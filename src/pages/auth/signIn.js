import React from "react";
import Form from "../../components/form";
import {
  auth,
  dbRealTime,
  getDoc,
  dbFireStore,
  doc,
  signInWithEmailAndPassword,
  onValue,
  ref,
  get,
  child,
} from "../../firebase/conFig";

const SignIn = () => {
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (user) {
          alert("SignIn sucessfull");

          // FIRST WAY
          // onValue(ref(database, `users/${user.uid}`), (data) => {
          //   console.log("data====>", data.val());
          // const data = data.val();
          // })

          // SECOND WAY
          //   const userData = ref(database, `users/${user.uid}`);
          // onValue(userData, (snapshot) => {
          //   const data = snapshot.val();
          //   console.log(data)
          // });

          //  FIRST WAY OF  (GET METHOD)
          // get(ref(dbRealTime,`users/${user.uid}`))
          // .then((data) => {
          //   if (data.exists()) {
          //     alert("User Sucessfully login")
          //     // console.log(data.val());
          //   } else {
          //     console.log("No data available");
          //   }
          // })
          // .catch((error) => {
          //   console.error(error);
          // });

          //  SECONDE WAY OF  (GET METHOD)
          // const dbRef = ref(database);
          // get(child(dbRef, `users/${user.uid}`))
          //   .then((data) => {
          //     if (data.exists()) {
          //       console.log(data.val());
          //     } else {
          //       console.log("No data available");
          //     }
          //   })
          //   .catch((error) => {
          //     console.error(error);
          //   });

          // FIRSTORE GET DATA
          const userRef = doc(dbFireStore, "users", user.uid);
          const userData = await getDoc(userRef);
          if (userData.exists()) {
            console.log("user data exist:", userData.data());
          } else {
            console.log("No such document!");
          }
        }
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Invalid email address or password");
      });
  };
  return (
    <div>
      <Form signInUser={signInUser}></Form>
    </div>
  );
};

export default SignIn;
