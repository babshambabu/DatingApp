import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
const { default: jwtDecode } = require("jwt-decode");


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    age: '',
    dob: '',
    education: '',
    hobbies: '',
    interests: '',
    drinkingHabits: '',
    smokingHabits: '',
    profilePicture: null,
    images: [],
    reel: null,
  });
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('http://localhost:3001/login/status', {
        headers: { 'x-access-token': token },
      });
      return response.data.loggedIn;
    } catch (error) {
      console.error('Status check error:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ formData, setFormData, user, login, logout, checkLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
