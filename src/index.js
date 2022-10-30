import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, { FIrebasecontext } from './store/firebaseContext';
import {firebase} from "./firebase/config";

ReactDOM.render(
  <FIrebasecontext.Provider value={{firebase}}>
    <Context>
    <App />
    </Context>
  </FIrebasecontext.Provider>
  , document.getElementById('root'));
