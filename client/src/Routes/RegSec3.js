import React, { useState } from 'react';
import { Box, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Button } from '@mui/material';
import { useNavigate} from 'react-router-dom';

const RegSec3 = () => {
  const [relationshipType, setRelationshipType] = useState('');
  const [registerInMatrimony, setRegisterInMatrimony] = useState('');
  const navigate = useNavigate();

  const handleRelationshipChange = (event) => {
    setRelationshipType(event.target.value);
  };

  const handleMatrimonyChange = (event) => {
    setRegisterInMatrimony(event.target.value);
  };

  const handleSubmit = () => {
    if (relationshipType === 'longTerm' && registerInMatrimony === 'yes') {
      navigate('/matrimony');
    } else {
      navigate('/');
    }
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
          sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}
        >
    
      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <FormLabel component="legend"  variant="h3" >Relationship Type</FormLabel>
        <RadioGroup row value={relationshipType} onChange={handleRelationshipChange}>
          <FormControlLabel value="longTerm" control={<Radio />} label="Long Term" />
          <FormControlLabel value="shortTerm" control={<Radio />} label="Short Term" />
        </RadioGroup>
      </FormControl>

      {relationshipType === 'longTerm' && (
        <FormControl component="fieldset" sx={{ mt: 2 }}>
          <FormLabel component="legend">Would you like to register in our matrimony app?</FormLabel>
          <RadioGroup row value={registerInMatrimony} onChange={handleMatrimonyChange}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      )}

      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default RegSec3;
