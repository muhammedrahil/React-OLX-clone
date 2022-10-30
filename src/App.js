import React, { useContext, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom'
import { AuthContext, FIrebasecontext } from "./store/firebaseContext";
import { app } from "./firebase/config";
import { getAuth,onAuthStateChanged } from "firebase/auth";

/**
 * ?  =====Import Components=====
 */
 import Signup from './Pages/Signup';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import CreatePage from './Pages/Create';

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FIrebasecontext);

  useEffect(() => {
    const auth = getAuth(app);
     onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser)
      // console.log(currentuser);
    })

  })
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
        </Routes>
        <Routes>
          <Route path='/signup' element={<Signup />}> </Route>
        </Routes>
        <Routes>
          <Route path='/login' element={<LoginPage />}> </Route>
        </Routes>
        <Routes>
          <Route path='/create' element={<CreatePage />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
