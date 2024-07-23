import imghome from "../assets/right-partner.jpg"

import React from 'react';
import { useContext } from 'react';

import { AuthContext } from '../AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="home">
        <h1>Welcome, {user? user.name : 'Guest'}</h1>   
    <img src={imghome} alt=""/>  
    </div>
  );
};

export default Home;
