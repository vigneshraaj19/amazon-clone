import {
  Routes,
  Route,
} from "react-router-dom";
import { auth } from "./firebase";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import './index.js';
import Login from "./Login";
import Logins from "./logins";
import React, { useEffect } from "react";
import {useStateValue} from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
 //it will only run once when the app component loads..
  auth.onAuthStateChanged(authUser =>{
    console.log("THE USER IS",authUser);
    if(authUser){
      //the user just logged in/ the user was logged in
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }
    else{
      //the user is logged out
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
  })
  },[])
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/checkout" element={<><Checkout /></>} />
      <Route path="/login" element={<><Logins /></>} />
    </Routes>
    </div>

  );
}

export default App;
