// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCul_WX9snoaOU0Q71i07uV5zTv7O2LsKY",
  authDomain: "cubebuzz-ef5dc.firebaseapp.com",
  projectId: "cubebuzz-ef5dc",
  storageBucket: "cubebuzz-ef5dc.appspot.com",
  messagingSenderId: "251025069752",
  appId: "1:251025069752:web:1846516adde7fc591b464d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;