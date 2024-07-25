import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, Grid, Typography } from '@mui/material';
import ImageUploading from 'react-images-uploading';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import Box from "@mui/material/Box";

const RegSec1 = () => {
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [interests, setInterests] = useState('');
  const [drinking, setDrinking] = useState('');
  const [smoking, setSmoking] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [images, setImages] = useState([]);
  const [reel, setReel] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfilePictureChange = (imageList) => {
    setProfilePicture(imageList[0]?.file);
  };

  const handleImagesChange = (imageList) => {
    setImages(imageList.map(image => image.file));
  };

  const handleReelChange = (e) => {
    setReel(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userId', user._id);  // Append user ID from context
    formData.append('age', age);
    formData.append('dob', dob);
    formData.append('education', education);
    formData.append('hobbies', hobbies);
    formData.append('interests', interests);
    formData.append('drinking', drinking);
    formData.append('smoking', smoking);
    formData.append('profilePicture', profilePicture);
    images.forEach((image, index) => {
      formData.append(`images`, image);
    });
    formData.append('reel', reel);

    try {
      await axios.post('http://localhost:3001/api/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-access-token': localStorage.getItem('token'), // Include JWT token
        },
      });
      navigate('/registration2');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          margin="auto"
          justifyContent="center"
          maxWidth={400}
          mt={5}
          p={5}
          boxShadow="5px 5px 10px #ccc"
          sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}
        >
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
          <Typography>Gender</Typography>
          <RadioGroup
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
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
          <ImageUploading
            value={profilePicture ? [profilePicture] : []}
            onChange={handleProfilePictureChange}
            maxNumber={1}
            dataURLKey="data_url"
          >
            {({ imageList, onImageUpload }) => (
              <div>
                <button type="button" onClick={onImageUpload}>Upload Profile Picture</button>
                {imageList.map((image, index) => (
                  <div key={index}>
                    <img src={image['data_url']} alt="" width="100" />
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </Grid>
        <Grid item xs={12}>
          <Typography>Upload Multiple Images</Typography>
          <ImageUploading
            multiple
            value={images.map(file => ({ file }))}
            onChange={handleImagesChange}
            maxNumber={10}
            dataURLKey="data_url"
          >
            {({ imageList, onImageUpload, onImageRemoveAll }) => (
              <div>
                <button type="button" onClick={onImageUpload}>Upload Multiple Images</button>
                <button type="button" onClick={onImageRemoveAll}>Remove All Images</button>
                {imageList.map((image, index) => (
                  <div key={index}>
                    <img src={image['data_url']} alt="" width="100" />
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </Grid>
        <Grid item xs={12}>
          <Typography>Upload a Reel</Typography>
          <input
            type="file"
            accept="video/*"
            onChange={handleReelChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
      </Box>
    </form>
  );
};

export default RegSec1;
