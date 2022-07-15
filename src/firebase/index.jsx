// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// configurações do firebase
const firebaseConfig = {
  apiKey: "AIzaSyCuXMyqx2yAo-cOX6kwo7v6zN6G6AK0fOo",
  authDomain: "tasklist-reactjs.firebaseapp.com",
  projectId: "tasklist-reactjs",
  storageBucket: "tasklist-reactjs.appspot.com",
  messagingSenderId: "259524302782",
  appId: "1:259524302782:web:7b66b5ff0c666a6a764bef",
  measurementId: "G-SW3HRHF18E"
};

// Initialize Firebase - inicializando o firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);