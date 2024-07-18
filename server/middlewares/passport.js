const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

const GOOGLE_CLIENT_ID = "129100928681-c5fqu6gt97s9mtujpl37h5f6cic4kcq7.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET= "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";

passport.use(new GoogleStrategy({
  clientID:GOOGLE_CLIENT_ID,
  clientSecret:GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  console.log(profile.emails[0]);
  // Here you can add your logic to store user in the database
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  
  done(null, user);
});

passport.deserializeUser(async (user, done) => {
  done(null, user);
});
