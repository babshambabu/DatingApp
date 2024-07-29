const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(403).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.id;
    next();
  });
};
// const authenticateJWT = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) {
//     return res.status(401).json({ message: 'Access Denied' });
//   }

//   try {
//     const verified = jwt.verify(token, jwtSecret);
//     req.user = verified;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid Token' });
//   }
// };

module.exports = verifyToken;
