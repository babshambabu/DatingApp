
import React,{ useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './Routes/Login'
import SignUp from './Routes/SignUp'
import Home from './Routes/Home'
import SendOtp from './Routes/SendOtp';
import CheckOtp from './Routes/CheckOtp';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  const [user,setUser] = useState("null");

  useEffect(()=>{
    const getUser=()=>{
      console.log("first");
      fetch("http://localhost:3001/auth/login/success",{
        method:"GET",
        credentials:"include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        }
        }
      ).then((response)=>{
        console.log(response)
        if(response.status===200)
        return(response.json)
        else
          throw new Error("Authentication has been failed");
    })
    .then((res)=>{
      console.log(`resObject is ${res.json}`);
      alert(`${res.user.json}`);
      setUser(res.user);
    })
    .catch((err)=>console.log(err));
  }
   getUser();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/send-otp' element={<SendOtp />} />
          <Route path='/check-otp' element={<CheckOtp />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
