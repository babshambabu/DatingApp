// import modules
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const passportSetup= require('./middlewares/passport')
const authRoute = require('./routes/auth')
const cookieSession = require("cookie-session");
const passport = require("passport");



const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String },
    password: String,
  });
  const User = mongoose.model('User', userSchema);

require("dotenv").config();
//const userSchema = require('./models/userSchema')

//app
const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  cookieSession({ name: "session", keys: ["dating"], maxAge: 24 * 60 * 60 * 100 })
);


app.use(passport.initialize());
app.use(passport.session());
app.use("/auth",authRoute)


//db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("DB CONNECTED")})
.catch((err)=>{console.log("DB CONNECTION ERROR",err)})

app.post('/login', async (req, res) => {
    const { name, email, password } = req.body
    console.log("My SERVER")
    console.log(req.body)
    try {
      console.log(email)
      const newUser = new User({ name, email, password });
      await newUser.save();
      res.status(201).json(newUser);
      console.log(newUser)
    } catch (err) {
        console.log(err.message)
      res.status(400).json({ error: err.message });
      
    }
  });
  
   // console.log(req.body);
//    const newUser = new userSchema({ name, email, password });
//    await newUser.save();
// userSchema.create({name,email,password}).
// then((user)=>{
//     console.log(user)
//     res.json(user)})
// .catch((err)=>res.json(err))
//})

//middleware

app.use(cors({
  origin: "http://localhost/3000",
  methods: "GET,POST,PUT,DELETE",
  credentials:true}));








//port
const port= process.env.PORT || 3001

//listener
const server= app.listen(port,()=>{console.log(`server is running on port ${port}`)});
