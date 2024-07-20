const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String, unique: true },
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
});

module.exports= mongoose.model("User", UserSchema);

 