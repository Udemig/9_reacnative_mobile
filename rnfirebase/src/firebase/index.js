// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBB_evjTlNVag9fwAqDB3SQ2rrvTR6Ei_s",
  authDomain: "rnfirebase-d3b78.firebaseapp.com",
  projectId: "rnfirebase-d3b78",
  storageBucket: "rnfirebase-d3b78.firebasestorage.app",
  messagingSenderId: "253044454661",
  appId: "1:253044454661:web:fee00c02920c8599a4736c",
  measurementId: "G-Y99TSQCMPG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
