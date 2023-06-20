// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMk57LRXIHCXpFN5RuZCiLybVXsVGnX5A",
  authDomain: "simple-todo-82dd0.firebaseapp.com",
  projectId: "simple-todo-82dd0",
  storageBucket: "simple-todo-82dd0.appspot.com",
  messagingSenderId: "597734871761",
  appId: "1:597734871761:web:fed15cba2d4cd880306bf0",
  measurementId: "G-46WBC5RJQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Firebase database
export const db = getFirestore(app);

//Firebase Authentication
export const auth = getAuth(app);

// Sign in with Email/password
export const signInWithEmail = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log("sign in error: ", err);
  }
};
