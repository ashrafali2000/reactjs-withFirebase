import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { getDatabase, onValue, ref, set, get, child} from "firebase/database";
import { getFirestore, doc, setDoc, getDoc,getDocs, collection, query, where, updateDoc, arrayUnion  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdnhGetpEZXSKmZbK4Lc5lz9zYRo4p26A",
  authDomain: "projects-8f236.firebaseapp.com",
  databaseURL: "https://projects-8f236-default-rtdb.firebaseio.com",
  projectId: "projects-8f236",
  storageBucket: "projects-8f236.appspot.com",
  messagingSenderId: "606794719752",
  appId: "1:606794719752:web:abb08f25aa1d765cdfa7bd",
  measurementId: "G-KRJ96V0CX0"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
 const dbRealTime = getDatabase(app);
 const dbFireStore = getFirestore(app);

 export { auth, dbRealTime,doc, setDoc, getDoc, getDocs, dbFireStore, signInWithEmailAndPassword,  onValue, ref, set, get, child, createUserWithEmailAndPassword, collection, query, where, updateDoc, arrayUnion }
