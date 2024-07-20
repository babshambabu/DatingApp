import imghome from "../assets/right-partner.jpg"

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Homepage = () => {
  const { checkLoginStatus } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyLoginStatus = async () => {
      const isLoggedIn = await checkLoginStatus();
      if (!isLoggedIn) {
        console.log("not logged in")
       if(0)
        navigate('/login');
      }
    };
    verifyLoginStatus();
  }, [checkLoginStatus, navigate]);

  return (
    <div className="home">
           
    <img src={imghome} alt=""/>  
    </div>
  );
};

export default Homepage;
