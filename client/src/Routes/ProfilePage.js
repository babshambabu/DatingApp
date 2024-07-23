import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import {
  Box, TextField, Button, Avatar, Grid, Typography
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || '');
  const [description, setDescription] = useState(user.description || '');
  const [profilePictureFile, setProfilePictureFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setProfilePicture(user.profilePicture);
    setDescription(user.description);
  }, [user]);

  const handleProfilePictureChange = (e) => {
    setProfilePictureFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (profilePictureFile) {
      formData.append('profilePicture', profilePictureFile);
    }
    if (description !== user.description) {
      formData.append('description', description);
    }

    try {
      const response = await axios.put('/api/user/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-access-token': localStorage.getItem('token'),
        },
      });
      updateUser(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography component="h1" variant="h5">
            Profile Picture
          </Typography>
          <Avatar src={profilePicture ? `/uploads/${profilePicture}` : ''} alt="Profile Picture" sx={{ width: 100, height: 100 }} />
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography component="h1" variant="h5">
            Describe Yourself
          </Typography>
          <TextField
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Update Profile
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage;
