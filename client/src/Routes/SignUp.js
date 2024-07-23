import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthContext';
//import Google from "../assets/google-signin.png";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    
  });
  const navigate= useNavigate();
  const { signup } = useContext(AuthContext);
 

  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const result = await signup(inputs.name, inputs.email, inputs.password);
        if (result) {
          console.log("Signup result:", result);
          navigate('/login');  // Redirect to login after signup
        } else {
          console.error("Signup failed");
        }
      } catch (err) {
        console.error("Signup error:", err);
        alert("Failed to sign up. Please try again.");
      }
    };
    const resetState = () => {
      setInputs({ name: "", email: "", password: "", phone: "" });
    };
  
    
 
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   await signup(inputs.name,inputs.email,inputs.password)      
  //   .then((result) => {
  //     console.log("result",result)
  //     alert("after login")
  //   // await axios
  //   //   .post("http://localhost:3001/signup", {
  //   //     name: inputs.name,
  //   //     email: inputs.email,
  //   //     password: inputs.password,
  //   //   })
  //     .then((result) =>{ console.log(result);
  //       navigate('/registration1');

  //     })
  // })
  //     .catch((err) => console.log(err));
  // }

 
return (
    <div>
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
          <Typography variant="h2"> SignUp </Typography>
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
            type="email"
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
            sx={{ mt: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            SignUp
          </Button>
          <br />
          Already a User ?
          <br />
          <a
            href="/login"
            onClick={resetState}
            sx={{ mt: 3, borderRadius: 3, mb: 10 }}
          >
            Login
          </a>
          <br />
          {/* <div className="login">
            <div className="wrapper">
              <div className="left">
                <div className="loginButton google" onClick={google}>
                  <img src={Google} alt="" className="icon" />
                </div>
              </div>
            </div>
          </div> */}
          <Button
            onClick={google}
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="primary"
          >
            Login with Google
          </Button>
          <br />
          <Button
            onClick={() => navigate("/login-otp")}
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="secondary"
          >
            Login with OTP
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default SignUp;
