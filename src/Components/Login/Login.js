import React,{useContext, useState} from 'react';
import { FIrebasecontext } from '../../store/firebaseContext';
import Logo from '../../olx-logo.png';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase}=useContext(FIrebasecontext)
  const navigate = useNavigate();
  const [err,errSet]=useState({code:'',massage:''})

  const handleLogin=(e)=>{
    e.preventDefault()
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    navigate("/");

  })
  .catch((err) => {
    errSet({code:err.code,massage:err.message});
  });

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="500px" height="200px" src={Logo}></img>
        <div style={{color:'red'}}>{err.massage}</div>
        <form onSubmit={handleLogin}>
        <label htmlFor="fname">Email</label>
          <input className="input form-control" required={true} value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="fname" name="email"  />
          <label htmlFor="lname">password</label>
          <input className="input form-control mb-2" required={true} value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="fname" name="password"  />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
