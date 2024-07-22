import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, Grid, Typography } from '@mui/material';
import MultipleImageUploader from 'react-multiple-image-uploader';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const RegSec1 = () => {
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [education, setEducation] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [interests, setInterests] = useState('');
  const [drinking, setDrinking] = useState(''); // Initialize with empty string
  const [smoking, setSmoking] = useState('');   // Initialize with empty string
  const [profilePicture, setProfilePicture] = useState(null);
  const [images, setImages] = useState([]);
  const [reel, setReel] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleImageChange = (imageList) => {
    setImages(imageList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('age', age);
    formData.append('dob', dob);
    formData.append('education', education);
    formData.append('hobbies', hobbies);
    formData.append('interests', interests);
    formData.append('drinking', drinking);
    formData.append('smoking', smoking);
    formData.append('profilePicture', profilePicture);
    images.forEach((image, index) => {
      formData.append(`image${index}`, image);
    });
    formData.append('reel', reel);

    try {
      await axios.post('/api/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-access-token': localStorage.getItem('token'),
        },
      });
      navigate('/registration2');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Date of Birth"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Drinking Habits</Typography>
          <RadioGroup
            value={drinking}
            onChange={(e) => setDrinking(e.target.value)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Typography>Smoking Habits</Typography>
          <RadioGroup
            value={smoking}
            onChange={(e) => setSmoking(e.target.value)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Typography>Upload Profile Picture</Typography>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Upload Multiple Images</Typography>
          <MultipleImageUploader
            onChange={handleImageChange}
            maxUpload={10}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>Upload a Reel</Typography>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setReel(e.target.files[0])}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegSec1;
