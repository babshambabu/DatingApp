const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const passportSetup = require('./middlewares/passport');
const authRoute = require('./routes/auth');
const session = require("express-session");
const passport = require("passport");

require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String },
  password: String,
});
const User = mongoose.model('User', userSchema);

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

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => { console.log("DB CONNECTED"); })
  .catch((err) => { console.log("DB CONNECTION ERROR", err); });

// Define routes
app.post('/login', async (req, res) => {
  const { name, email, password } = req.body.inputs; // Ensure this matches the frontend data structure
  console.log("My SERVER");
  console.log(req.body);
  try {
    
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
    console.log(newUser);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: err.message });
  }
});


// Start server
const port = process.env.PORT || 3001;
const server = app.listen(port, () => { console.log(`server is running on port ${port}`); });
