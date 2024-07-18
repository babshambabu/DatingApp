
import React,{ useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './Routes/Login'
import SignUp from './Routes/SignUp'
import Home from './Routes/Home'
import RegSec1 from './Routes/RegSec1';
import RegSec2 from './Routes/RegSec2';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import axios from 'axios';
import LoginOtp from './Routes/LoginOtp';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("hi")
        const response = await axios.get("http://localhost:3001/auth/login/status", { withCredentials: true });
        console.log(response.data)
        if (response.data.loggedin) {
          console.log(response.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={isAuthenticated? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={<SignUp />} />
         <Route path="/login-otp" element={<LoginOtp />} />
          <Route path="/registration1" element={<RegSec1 />} />
          <Route path="/registration2" element={<RegSec2 />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
