const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  email: { type: String, unique: true },
  password: String,
  name: String,
  profilePicture: String,
  age: Number,
  dob: Date,
  education: String,
  hobbies: String,
  interests: String,
  drinkingHabits: String,
  smokingHabits: String,
  reel: String,
  images: [String],
  role: String, // Employee, Employer, Job Seeker
  companyName: String,
  designation: String,
  location: String,
  jobTitle: String,
  expertiseLevel: String, // Beginner, Intermediate, Expert
  relationshipType: String ,
  registerInMatrimony: String ,

  // Additional fields
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports= mongoose.model("User", UserSchema);

 