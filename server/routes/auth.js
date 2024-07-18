const router = require("express").Router();
const passport = require("passport");
const cors = require("cors");
const { sendOtp, checkOtp } = require("../middlewares/controller");

// Handle preflight requests for CORS
router.options("*", cors());

const CLIENT_URL = "http://localhost:3000";

router.post('/send-otp', sendOtp);
router.post('/check-otp', checkOtp);


router.get("/login/success", (req, res) => {
  //console.log(req.user);
  //console.log(res);
  console.log("before LoginSuccess");
  if (req.user) {
    console.log("LoginSuccess");
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
      
    });
  }
});



router.get("/login/status", (req, res) => {
  console.log(req.user);
  //console.log(res);
  console.log("LoginCheck");
  
  if (req.user) {
    res.status(200).json({
      success: true,
      loggedin: true,
      user: req.user,
    });
  } else{
    res.status(200).json({
      success: false,
      loggedin: false
    });
  }


});




router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

// router.get("/logout", (req, res) => {
//   req.logout({});
//   res.redirect(process.env.CLIENT_URL);
// });
// router.get("/logout", (req, res, next) => {
//   req.logout((err) => {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("http://localhost:3000");
//   });
// });
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('connect.sid'); // Clear session cookie
      res.redirect("http://localhost:3000"); // Redirect to the login page
    });
  });
});
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
