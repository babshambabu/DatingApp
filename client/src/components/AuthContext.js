import React, { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    age: '',
    dob: '',
    education: '',
    hobbies: '',
    interests: '',
    drinkingHabits: '',
    smokingHabits: '',
    profilePicture: null,
    reel: null,
    images: [],
  });

  const login = async (email, password) => {
    const response = await axios.post('/api/login', { email, password });
    const { token } = response.data;
    localStorage.setItem('jwtToken', token);
    const decoded = jwt_decode(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem('jwtToken');
    setUser(null);
  };

  const updateFormData = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, formData, updateFormData }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
