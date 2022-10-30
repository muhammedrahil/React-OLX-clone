import './App.css';
import { collection, getDocs, setDoc, doc, addDoc, deleteDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { db } from "./firebase/Config";

function App() {
  return (
    <div className="App">
      <button onClick={async () => {
        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, 'admin12@gmail.com', 'password')
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user);

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });



          // const citiesCol = collection(db, 'products');
          // const citySnapshot = await getDocs(citiesCol);
          // citySnapshot.docs.forEach(doc => {
          //   console.log(doc.data(), doc.id);
          // })



        // await deleteDoc(doc(citiesCol, "T80tuJeqGdQHrZuXUXKs")).then(()=>{
        //   console.log('done');
        // })

        // await setDoc(doc(db, "products",'e07fwzqRTghin3YjXuJz'), {
        //   name: "angeles",
        //   age: 30,
        //   place: "USA"
        // });

        // await deleteDoc(doc(db, "products", "LA")).then(()=>{
        //   console.log('done');
        // })



        // const docRef = await addDoc(citiesCol, {
        //   name: "Los Asdxacsagferhbfsdngeles",
        //   age: 3343240,
        //   place: "USA"
        // });


      }}>Click Me</button>
    </div>
  );
}

export default App;



// config 
import {initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNPBAp4qapvEJl4aGuSl6tFmj8DWsR7Bo",
  authDomain: "learn-firebase-acb79.firebaseapp.com",
  projectId: "learn-firebase-acb79",
  storageBucket: "learn-firebase-acb79.appspot.com",
  messagingSenderId: "811777621382",
  appId: "1:811777621382:web:ea19d2528f253d6f880007",
  measurementId: "G-T82YV212ZZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);