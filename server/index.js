
// import modules
const express = require('express');
const session = require('express-session');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const passport = require("passport");
const jwt = require('jsonwebtoken');
const multer = require('multer');
var bcrypt = require('bcryptjs');

const authenticateJWT = require('./middlewares/auth');

const passportSetup = require('./middlewares/passport');
const authRoute = require('./routes/auth');
const User = require('./models/userSchema')

//load env vaiables
require("dotenv").config();


// Initialize express app
const app = express();
app.use(express.json());
app.use(bodyParser.json());

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));

app.use(session({
  secret: 'dating-app-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoute);

// file upload multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });


// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => { console.log("DB CONNECTED"); })
  .catch((err) => { console.log("DB CONNECTION ERROR", err); });






app.post('/login', async (req, res) => {

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    console.log("no user")
    return res.status(200).json({ error: 'Invalid email ' });
  }


  if (password != user.password) {
    console.log("no password")
    return res.status(200).json({ error: 'Invalid  password' });
  }
  console.log("in login")
  const token = jwt.sign({ id: user._id }, process.env.JWTSECRET, { expiresIn: '1h' });
  res.status(200).json({ token   });
  
});

/*/

app.post('/update', authenticateJWT, upload.fields([{ name: 'profilePicture' }, { name: 'images' }, { name: 'reel' }]), async (req, res) => {
  const { age, dob, education, hobbies, interests, drinkingHabits, smokingHabits } = req.body;
  const profilePicture = req.files.profilePicture ? req.files.profilePicture[0].path : null;
  const reel = req.files.reel ? req.files.reel[0].path : null;
  const images = req.files.images ? req.files.images.map((file) => file.path) : null;

  try {
    const user = await User.findById(req.user.id);

    if (user) {
      user.age = age || user.age;
      user.dob = dob || user.dob;
      user.education = education || user.education;
      user.hobbies = hobbies || user.hobbies;
      user.interests = interests || user.interests;
      user.drinkingHabits = drinkingHabits || user.drinkingHabits;
      user.smokingHabits = smokingHabits || user.smokingHabits;
      user.profilePicture = profilePicture || user.profilePicture;
      user.reel = reel || user.reel;
      if (images) {
        user.images = [...user.images, ...images];
      }

      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});










/*/


app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body
  //console.log("My SERVER")
  //console.log(req.body)
  try {
    //console.log(email)
    const user = await User.findOne({ email });
    if (user) {
      console.log("cannot create as user exists")
      return res.status(400).json({ error: 'user alreadyexist' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
    console.log(newUser)
  } catch (err) {
      console.log(err.message)
    res.status(400).json({ error: err.message });
    
  }
});








// Start server
const port = process.env.PORT || 3001;
const server = app.listen(port, () => { console.log(`server is running on port ${port}`); });
