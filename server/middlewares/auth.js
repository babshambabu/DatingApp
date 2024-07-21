const jwt = require('jsonwebtoken');
const User = require('../models/userSchema'); // Adjust the path according to your project structure

// JWT secret
const jwtSecret = 'babshadatingapp';

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const verified = jwt.verify(token, jwtSecret);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = authenticateJWT;
