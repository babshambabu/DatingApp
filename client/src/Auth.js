import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";


const Auth = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
 
  

  const handleChange=(e)=>{
    setInputs((prevState)=>({...prevState,
        [e.target.name] :e.target.value 
    }))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res= await axios.post('http://localhost:3001/login', inputs)
   console.log(res.data)
   
    console.log(inputs);
  }
   const resetState=()=>{
    
    setInputs({name:"",email:"",password:""})
    
   }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={"center"}
          margin="auto"
          justifyContent={"center"}
          maxWidth={400}
          margin-top={15}
          padding={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}
        >
          <Typography variant="h2"> "SignUp" </Typography>
           
            <TextField
            name="name"
            value={inputs.name}
            onChange={handleChange}
              variant="outlined"
              margin="normal"
              type="text"
              placeholder="Name"
            />
          
          <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
            variant="outlined"
            margin="normal"
            type={"email"}
            placeholder="Email"
          />
          <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
            variant="outlined"
            margin="normal"
            type="password"
            placeholder="Password"
          />
          <Button
          type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
            margin-top={"15px"}
            border-radius={3}
          >
            "SignUp"
          </Button>
          <br />
          OR
          <br />
          <Button
            onClick={() => {resetState() }}
            sx={{ marginTop: 3, borderRadius: 3, marginBottom: 10 }}
          >
           
            "Login"
          </Button>
          
        </Box>
      </form>
    </div>
  );
};

export default Auth;
