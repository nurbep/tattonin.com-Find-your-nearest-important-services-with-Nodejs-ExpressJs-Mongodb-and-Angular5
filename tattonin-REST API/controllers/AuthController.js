var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");



//var userController = {};
module.exports={
// Restrict access to root page
home:function(req, res) {
  res.render('index', { user : req.user });
},


// Post registration
doRegister:function(req, res,next) {
  User.register(new User({ username : req.body.username, name: req.body.name,imagepath:"",role:"user"}), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { user : user });
    }

   passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
     
      res.json({user:user, message:"Successfully created user!"});
    });
  })(req, res, next);
  });
},


// Post login
doLogin:function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
  
      res.json({user});
    });
  })(req, res, next);
},

// logout
logout:function(req, res) {
  req.logout();
  res.redirect('/');
},

isLoggedin:function isLoggedIn(req, res, next) {
  
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();
  }

}// ends module.exports

