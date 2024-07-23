// import modules
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
require("./middlewares/passport"); // Ensure this path is correct
const jwt = require("jsonwebtoken");
const authRoute = require("./routes/auth");
const User = require("./models/userSchema");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
require("./middlewares/passport"); 

//load env vaiables
require("dotenv").config();

// Initialize express app
const app = express();
app.use(express.json());
app.use(bodyParser.json());

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(
  session({
    secret: "dating-app-secret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoute);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", userRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log("DB CONNECTION ERROR", err);
  });

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    console.log("no user");
    return res.status(200).json({ error: "Invalid email " });
  }

  if (password != user.password) {
    console.log("no password");
    return res.status(200).json({ error: "Invalid  password" });
  }
  console.log("in login");
  const token = jwt.sign(
    { id: user._id, name: user.name, age: user.age },
    process.env.JWTSECRET,
    { expiresIn: "1h" }
  );
  res.status(200).json({ token });
});
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      console.log("cannot create as user exists");
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    
    // Generate JWT for the new user
    const token = jwt.sign(
      { id: newUser._id, name: newUser.name, age: newUser.age },
      process.env.JWTSECRET,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token });
    console.log(newUser);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: err.message });
  }
});

// Start server
const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
