
import React,{ useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Login from './Routes/Login'
import SignUp from './Routes/SignUp'
import Home from './Routes/Home'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import axios from 'axios';
import LoginOtp from './Routes/LoginOtp';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3001/auth/login/success", { withCredentials: true });
        if (response.data.success) {
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
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
