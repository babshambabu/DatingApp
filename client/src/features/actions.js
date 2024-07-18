import axiosInstance from '../axiosConfig';
import { UPDATE_FORM_DATA, HANDLE_FILE_CHANGE, UPDATE_USER } from './actionTypes';

// Action to update form data
export const updateFormData = (formData, name, value) => {
  return {
    type: UPDATE_FORM_DATA,
    payload: { formData, name, value }
  };
};

// Action to handle file changes
export const handleFileChange = (formData, name, files) => {
  return {
    type: HANDLE_FILE_CHANGE,
    payload: { formData, name, files }
  };
};

// API call to update user data
export const updateUser = async (formData) => {
  const formDataObj = new FormData();
  Object.keys(formData).forEach((key) => {
    if (Array.isArray(formData[key])) {
      formData[key].forEach((file) => {
        formDataObj.append(key, file);
      });
    } else {
      formDataObj.append(key, formData[key]);
    }
  });

  try {
    const response = await axiosInstance.post('/api/update', formDataObj);
    return {
      type: UPDATE_USER,
      payload: response.data
    };
  } catch (error) {
    console.error('Update error:', error);
    throw error;
  }
};
