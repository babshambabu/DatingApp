import axiosInstance from './axiosConfig';

// Login user and get JWT token
export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('/api/login', { email, password });
    return response.data; // Contains the JWT token
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Update user data
export const updateUser = async (formData) => {
  try {
    const response = await axiosInstance.post('/api/update', formData);
    return response.data;
  } catch (error) {
    console.error('Update error:', error);
    throw error;
  }
};
