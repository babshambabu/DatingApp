import React, { useEffect, useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './Routes/Login';
import SignUp from './Routes/SignUp';
import Home from './Routes/Home';
import RegSec1 from './Routes/RegSec1';
import RegSec2 from './Routes/RegSec2';
import RegSec3 from './Routes/RegSec3';
import Matrimony from './Routes/Matrimony';
import LoginOtp from './Routes/LoginOtp';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const App = () => {
  const { checkLoginStatus } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyLoginStatus = async () => {
      const isLoggedIn = await checkLoginStatus();
      if (!isLoggedIn) {
        navigate('/login');
      }
    };
    verifyLoginStatus();
  }, [checkLoginStatus, navigate]);

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login-otp" element={<LoginOtp />} />
          <Route path="/registration1" element={<RegSec1 />} />
          <Route path="/registration2" element={<RegSec2 />} />
          <Route path="/registration3" element={<RegSec3 />} />
          <Route path="/matrimony" element={<Matrimony />} />
        </Routes>
    </div>
  );
};

export default App;
