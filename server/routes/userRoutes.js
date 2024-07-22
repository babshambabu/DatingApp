

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../models/userSchema'); // Assuming you have a User model
const verifyToken = require('../middlewares/auth'); // JWT verification middleware
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post('/register', verifyToken, upload.fields([
  { name: 'profilePicture', maxCount: 1 },
  { name: 'reel', maxCount: 1 },
  { name: 'images', maxCount: 10 }
]), async (req, res) => {
  try {
    const { age, dob, education, hobbies, interests, drinking, smoking } = req.body;
    const profilePicture = req.files['profilePicture'] ? req.files['profilePicture'][0].path : null;
    const reel = req.files['reel'] ? req.files['reel'][0].path : null;
    const images = req.files['images'] ? req.files['images'].map(file => file.path) : [];

    const updatedUser = await User.findByIdAndUpdate(req.userId, {
      age,
      dob,
      education,
      hobbies,
      interests,
      drinking,
      smoking,
      profilePicture,
      images,
      reel,
    }, { new: true });

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating user details' });
  }
});

router.post('/register2', verifyToken, async (req, res) => {
    try {
      const { role, companyName, designation, location, jobTitle, expertiseLevel } = req.body;
      
      const updatedUser = await User.findByIdAndUpdate(req.userId, {
        role,
        companyName,
        designation,
        location,
        jobTitle,
        expertiseLevel,
      }, { new: true });
  
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error updating user details' });
    }
  });
  
  router.post('/registration3', verifyToken, async(req, res) => {
    try {
    const { relationshipType, registerInMatrimony } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.userId, {
        relationshipType,
          registerInMatrimony
      }, { new: true });
  
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error updating user details' });
    }
  
    res.status(200).json({ message: 'Registration step 3 completed' });
  });
  
 
  
// router.post('/login', loginUser);
// router.get('/logout', logoutUser);
// router.get('/login/status', authMiddleware, checkLoginStatus);

module.exports = router;