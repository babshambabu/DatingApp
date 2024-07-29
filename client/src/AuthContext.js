import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
//const { default: jwtDecode } = require("jwt-decode");
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
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
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      try {
      const decoded = jwtDecode(token);
        setCurrentUser(decoded);
      } catch (error) {
        console.error('Token decode error:', error);
        setToken(null);
        localStorage.removeItem('token');
      }
    }
  }, [token]);

  const signup = async (name, email, password) => {
    try {
      console.log("signup start");
      const response = await axios.post('http://localhost:3001/signup', { name, email, password });
      const { token } = response.data;

      localStorage.setItem('token', token);
      setToken(token);
      const decoded = jwtDecode(token);
      setCurrentUser(decoded);

      return decoded;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      console.log("login start");
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log("in",response.data);
      const { token } = response.data;
      console.log(token);
      localStorage.setItem('token', token);
      setToken(token);
      const decoded = jwtDecode(token);
      console.log(decoded);
      setCurrentUser(decoded);
      console.log("login end");
      return decoded;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setCurrentUser(null);
  };

  const checkLoginStatus = async () => {
    if (!token || token === "undefined" || token === undefined) return false;
    try {
      const response = await axios.get('http://localhost:3001/auth/login/status', {
        headers: { 'x-access-token': token },
      });
      return response.data.loggedIn;
    } catch (error) {
      console.error('Status check error:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ formData, setFormData, currentUser, signup, login, logout, checkLoginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
