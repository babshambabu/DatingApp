// import modules
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require('morgan');
require("dotenv").config();
const UserModel = require('./models/User.js')

//app
const app=express();
app.use(express.json())

//db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("DB CONNECTED")})
.catch((err)=>{console.log("DB CONNECTION ERROR",err)})

app.post('/login',(req,res)=>{
    console.log(req.body);

    const user= new UserModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
user.save(req.body).
then((user)=>{
    console.log(`serverSide ${user}`)
    res.json(user)})
.catch((err)=>res.json(err))
})

//middleware
app.use(morgan("dev"));
app.use(cors({origin:true,credentials:true}));



//routes



//port
const port= process.env.PORT || 3001

//listener
const server= app.listen(port,()=>{console.log(`server is running on port ${port}`)});
