const GOOGLE_CLIENT_ID = "129100928681-c5fqu6gt97s9mtujpl37h5f6cic4kcq7.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET= "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";
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport =require("passport");


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },async function(accessToken, refreshToken, profile, done) {
    console.log(profile);
     return done(null,profile);
      console.log("first");
      // const newUser={
      //       googleId: profile.id,
      //       username: profile.displayName,
      //       email: profile.emails[0].value,
      //       emailVerified: true
      // }
      // try {
      //     let user = await User.findOne({ googleId: profile.id });
      //     if (user) {
      //       done(null, user);
      //     } else {
      //       user = await User.create(newUser);
      //       done(null, user);
      //     }
      //   } catch (err) {
      //     console.error(err);
      //     done(err, null);
      //   }
      
    }
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }


));

//since we use sessions
passport.serializeUser((user,done)=>{
  console.log("serialize user");
done(null,user);
})
passport.deserializeUser(async(user,done)=>{
  done(null,user);
    // try {
      
    //     const user = await User.findById(id); 
    //     done(null, user);
    //   } catch (error) {
    //     done(error, null);
    //   }
    })
