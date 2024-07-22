const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.uploadFiles = upload.fields([
  { name: 'profilePicture', maxCount: 1 },
  { name: 'image0', maxCount: 10 },
  { name: 'reel', maxCount: 1 },
]);




exports.registerUser = async (req, res) => {
  const { age, dob, education, hobbies, interests, drinking, smoking, email, password } = req.body;
  const profilePicture = req.files['profilePicture'][0].path;
  const images = req.files['image0'].map(file => file.path);
  const reel = req.files['reel'][0].path;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
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
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.logoutUser = (req, res) => {
  res.cookie('token', '', { expires: new Date(0) });
  res.json({ message: 'Logged out' });
};

exports.checkLoginStatus = (req, res) => {
  const token = req.header('x-access-token');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ isLoggedIn: true, user: { id: decoded.id } });
  } catch (err) {
    res.status(401).json({ isLoggedIn: false });
  }
};
