import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import { FIrebasecontext } from '../../store/firebaseContext';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, doc, addDoc } from 'firebase/firestore/lite';
import { app } from "../../firebase/config";
import './Signup.css';
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FIrebasecontext);
  const [err,errSet]=useState({code:'',massage:''})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        return updateProfile(auth.currentUser,{
          displayName:username
        }).then(()=>{
          const add_user = collection(firebase, 'users');
          addDoc(add_user, {
            id: result.user.uid,
            username: username,
            phone: phone
          }).then(()=>{
            navigate("/login");
          })
        })
      }).catch((err)=>{
        errSet({code:err.code,massage:err.message});
      })
  } 
  return (
    <div >
      <div className="signupParentDiv">
        <img width="500px" height="200px" src={Logo}></img>
        <div style={{color:'red'}}>{err.massage}</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <input className="input form-control" required={true}  value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="fname" name="name" defaultValue="John" />
          <label htmlFor="fname">Email</label>
          <input className="input form-control" required={true} value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="fname" name="email" defaultValue="John" />
          <label htmlFor="lname">Phone</label>
          <input className="input form-control" required={true} value={phone} onChange={(e) => setPhone(e.target.value)} type="number" id="lname" name="phone" />
          <label htmlFor="lname">Password</label>
          <input className="input form-control mb-1" required={true} value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="lname" name="password" defaultValue="Doe" />
          <button className='btn btn-dark'>Signup</button>
        </form>
        <a className=''><span className='fw-bold'>Login</span> </a>
      </div>
    </div>
  );
}
