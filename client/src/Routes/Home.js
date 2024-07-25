import imghome from "../assets/right-partner.jpg"
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';


import { AuthContext } from '../AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);



  if (user) {
    navigate('/dashboard');
  }

  return (
    <div className="home">
        <h1>Welcome, {user? user.name : 'Guest'}</h1>   
    <img src={imghome} alt=""/>  
    </div>
  );
};

export default Home;
