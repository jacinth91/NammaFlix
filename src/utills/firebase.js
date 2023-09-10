// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC3DO8fpbKqYpLildmbLRPXGMmpru5Nvs",
  authDomain: "nammaflix-cec07.firebaseapp.com",
  projectId: "nammaflix-cec07",
  storageBucket: "nammaflix-cec07.appspot.com",
  messagingSenderId: "636178989855",
  appId: "1:636178989855:web:9de6764c35079571d3e62a",
  measurementId: "G-HH5EP04DY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
