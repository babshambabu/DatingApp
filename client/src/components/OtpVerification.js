import React, { useState } from 'react';
import axios from 'axios';

const OtpVerification = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/send-otp', { phone });
      console.log(response.data);
      setOtpSent(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleCheckOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/check-otp', { phone, code: otp });
      console.log(response.data);
      // Handle successful OTP verification
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div>
      {!otpSent ? (
        <div>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleSendOtp}>Send OTP</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleCheckOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default OtpVerification;
