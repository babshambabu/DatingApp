
import React, { useState } from 'react';
import {
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  InputLabel,
} from '@mui/material';

const RegSec2 = () => {



  const [role, setRole] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [expertiseLevel, setExpertiseLevel] = useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  return (
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
          sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>
      <FormControl component="fieldset">
        <FormLabel component="legend"><h2>Employment details</h2></FormLabel>
        <RadioGroup row value={role} onChange={handleRoleChange}>
          <FormControlLabel value="employee" control={<Radio />} label="Employee" />
          <FormControlLabel value="employer" control={<Radio />} label="Employer" />
          <FormControlLabel value="jobSeeker" control={<Radio />} label="Job Seeker" />
        </RadioGroup>
      </FormControl>

      {(role === 'employee' || role === 'employer') && (
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Designation"
            variant="outlined"
            fullWidth
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Location"
            variant="outlined"
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Box>
      )}

      {role === 'jobSeeker' && (
        <Box sx={{ mt: 2 }}>
          <TextField
            label="Job Title"
            variant="outlined"
            fullWidth
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel>Level of Expertise</InputLabel>
            <Select
              value={expertiseLevel}
              onChange={(e) => setExpertiseLevel(e.target.value)}
              label="Level of Expertise"
            >
              <MenuItem value="beginner">Beginner</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="expert">Expert</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}
    </Box>
  );
};


export default RegSec2