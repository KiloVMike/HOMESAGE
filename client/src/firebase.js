// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-homesage.firebaseapp.com",
  projectId: "mern-homesage",
  storageBucket: "mern-homesage.appspot.com",
  messagingSenderId: "492325563218",
  appId: "1:492325563218:web:ec533638f6f54d0627a88b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);