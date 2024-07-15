import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginOtp = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
        alert("handleSendOtp-Before axios")
      const response = await axios.post("http://localhost:3001/auth/send-otp", { phone });
      console.log(response.data);
      alert("handleSendOtp-after axios")
      setOtpSent(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/check-otp", { phone, code: otp });
      if (response.data.success) {
        console.log("OTP verified");
        navigate('/')
        // Navigate to home or do something after successful OTP verification
      } else {
        console.log("Invalid OTP");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
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
        <Typography variant="h2">Login with OTP</Typography>
        {!otpSent ? (
          <>
            <TextField
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              variant="outlined"
              margin="normal"
              type="phone"
              placeholder="Phone Number"
            />
            <Button
              onClick={handleSendOtp}
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="primary"
            >
              Send OTP
            </Button>
          </>
        ) : (
          <>
            <TextField
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              variant="outlined"
              margin="normal"
              type="text"
              placeholder="Enter OTP"
            />
            <Button
              onClick={handleVerifyOtp}
              sx={{ marginTop: 3, borderRadius: 3 }}
              variant="contained"
              color="primary"
            >
              Verify OTP
            </Button>
          </>
        )}
      </Box>
    </div>
  );
};

export default LoginOtp;
