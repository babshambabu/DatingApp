import imghome from "../assets/right-partner.jpg"

import React from 'react';
import { useContext } from 'react';

import { AuthContext } from '../AuthContext';

const Homepage = () => {
  const { user } = useContext(AuthContext);
  console.log(user)
  return (
    <div className="home">
        <h1>Welcome, {user?.email || 'Guest'}</h1>   
    <img src={imghome} alt=""/>  
    </div>
  );
};

export default Homepage;
