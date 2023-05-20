// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoKnoDS_RWzmoSYffDA76FTtDLwxFV9bE",
  authDomain: "cabana-156bd.firebaseapp.com",
  projectId: "cabana-156bd",
  storageBucket: "cabana-156bd.appspot.com",
  messagingSenderId: "933153241123",
  appId: "1:933153241123:web:ea0b6b9f8b5bcb2dced996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;