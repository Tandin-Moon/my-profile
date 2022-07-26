// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD85AwjMCgRCUaQhHxsUNsGzOriQChOOcs",
  authDomain: "myprofiletandin.firebaseapp.com",
  projectId: "myprofiletandin",
  storageBucket: "myprofiletandin.appspot.com",
  messagingSenderId: "371029995995",
  appId: "1:371029995995:web:1140b41f505839bb9d37fe",
  measurementId: "G-G8RE0BH65S"
};

firebase.initializeApp( firebaseConfig )
// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore()
