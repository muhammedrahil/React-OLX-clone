
import {initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import 'firebase/auth'
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNPBAp4qapvEJl4aGuSl6tFmj8DWsR7Bo",
  authDomain: "learn-firebase-acb79.firebaseapp.com",
  projectId: "learn-firebase-acb79",
  storageBucket: "learn-firebase-acb79.appspot.com",
  messagingSenderId: "811777621382",
  appId: "1:811777621382:web:ea19d2528f253d6f880007",
  measurementId: "G-T82YV212ZZ"
};

export const app = initializeApp(firebaseConfig);

export const firebase = getFirestore(app);


