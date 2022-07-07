// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKb8L9Iq2rltFpaCkhyJ2PG85rupdm0sw",
  authDomain: "expo-firebase-c2f00.firebaseapp.com",
  projectId: "expo-firebase-c2f00",
  storageBucket: "expo-firebase-c2f00.appspot.com",
  messagingSenderId: "270954755362",
  appId: "1:270954755362:web:664281a19ec64657a3e17b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);