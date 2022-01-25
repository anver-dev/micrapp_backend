const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get('/protected-route', passport.authenticate('jwt', { session: false }), (req, res, next) => {  
  if (req.isAuthenticated()) {
    res.send('<h1>You are authenticated</h1><p><a href="/logout">Logout and reload</a></p>');
  } else {
    res.send('<h1>You are not authenticated</h1><p><a href="/login">Login</a></p>');
  }
});

module.exports = router;