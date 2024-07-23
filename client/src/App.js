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
import ProfilePage from './Routes/ProfilePage';
//import SideNav from './components/SideNav';
import Sent from './components/Sent';
import Received from './components/Received';
import Accepted from './components/Accepted';
import Rejected from './components/Rejected';
import Shortlisted from './components/Shortlisted';
import ShortlistedBy from './components/ShortlistedBy';
import Contacted from './components/Contacted';
import Messages from './components/Messages';

const App = () => {
  const { checkLoginStatus } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyLoginStatus = async () => {
      const isLoggedIn = await checkLoginStatus();
      
    };
    verifyLoginStatus();
  }, [checkLoginStatus, navigate]);

  // const { user } = useContext(AuthContext);

 

  return (
    <div className="App">
        <Navbar />
        <div>
        
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login-otp" element={<LoginOtp />} />
          <Route path="/registration1" element={<RegSec1 />} />
          <Route path="/registration2" element={<RegSec2 />} />
          <Route path="/registration3" element={<RegSec3 />} />
          <Route path="/matrimony" element={<Matrimony />} />
          <Route path="/profile" element={<ProfilePage />} />
            <Route path="/sent" element={<Sent />} />
            <Route path="/received" element={<Received />} />
            <Route path="/accepted" element={<Accepted />} />
            <Route path="/rejected" element={<Rejected />} />
            <Route path="/shortlisted" element={<Shortlisted />} />
            <Route path="/shortlisted-by" element={<ShortlistedBy />} />
            <Route path="/contacted" element={<Contacted />} />
            <Route path="/messages" element={<Messages />} />
        </Routes>
        </div>
    </div>
  );
};

export default App;
