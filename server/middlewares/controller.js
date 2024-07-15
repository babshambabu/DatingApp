const { sendVerification, checkVerification } = require('./twilio');

const sendOtp = async (req, res) => {
  const { phone } = req.body;
  console.log(`Received phone number: ${phone}`);
  try {
    const response = await sendVerification(phone);
    console.log('Verification response:', response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send verification' });
  }
};

// const checkOtp = async (req, res) => {
//   const { phone, code } = req.body;
//   try {
//     const response = await checkVerification(phone, code);
//     console.log('Verification response:', response);
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to check verification' });
//   }
// };
const checkOtp = async (req, res) => {
  const { phone, code } = req.body;
  console.log(`Checking OTP for phone: +91${phone} with code: ${code}`);
  try {
    const response = await checkVerification(phone, code);
    console.log('Verification response:', response);
    if (response.status === 'approved') {
      return res.status(200).json({ success: true,
        message: "successful",
        user: req.user,});
    } else {
      res.status(400).json({ success: false, message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error checking verification:', error);
    res.status(500).json({ error: 'Failed to check verification' });
  }
};


module.exports = { sendOtp, checkOtp };
