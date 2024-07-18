import React, { useContext } from 'react';
import { TextField, Grid, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import ImageUploading from 'react-images-uploading';
import { AuthContext } from '../AuthContext';
import { updateFormData, handleFileChange, updateUser } from '../features/actions';

const RegSec1 = () => {
  const { formData, setFormData } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => updateFormData(prevData, name, value));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => handleFileChange(prevData, 'profilePicture', file));
  };

  const handleReelChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => handleFileChange(prevData, 'reel', file));
  };

  const handleImagesChange = (imageList) => {
    setFormData((prevData) => handleFileChange(prevData, 'images', imageList.map(image => image.file)));
  };

  const handleSubmit = async () => {
    try {
      await updateUser(formData);
      alert('Profile updated successfully');
    } catch (error) {
      alert('Failed to update profile');
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Update Profile</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="age"
          name="age"
          label="Age"
          value={formData.age}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="dob"
          name="dob"
          label="Date of Birth"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formData.dob}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="education"
          name="education"
          label="Education"
          value={formData.education}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="hobbies"
          name="hobbies"
          label="Hobbies"
          value={formData.hobbies}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="interests"
          name="interests"
          label="Interests"
          value={formData.interests}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Drinking Habits</FormLabel>
          <RadioGroup
            aria-label="drinking-habits"
            name="drinkingHabits"
            value={formData.drinkingHabits}
            onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Smoking Habits</FormLabel>
          <RadioGroup
            aria-label="smoking-habits"
            name="smokingHabits"
            value={formData.smokingHabits}
            onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Upload Profile Picture</Typography>
        <input type="file" onChange={handleProfilePictureChange} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Upload Multiple Images</Typography>
        <ImageUploading
          multiple
          value={formData.images}
          onChange={handleImagesChange}
          maxNumber={10}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <Button onClick={onImageUpload}>Choose images</Button>
              &nbsp;
              <Button onClick={onImageRemoveAll}>Remove all images</Button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image['data_url']} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <Button onClick={() => onImageUpdate(index)}>Update</Button>
                    <Button onClick={() => onImageRemove(index)}>Remove</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Upload a Reel</Typography>
        <input type="file" onChange={handleReelChange} />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update Profile
        </Button>
      </Grid>
    </Grid>
  );
};

export default RegSec1;
