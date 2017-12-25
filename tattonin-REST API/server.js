var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan'); // used to see requests
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;



var mongoose=require('mongoose');
var config = require('./config');
 mongoose.connect(config.database);
 mongoose.Promise = global.Promise;
app.set('strict routing',true);
 app.set('case sensitive routing',true);
 app.set('env','development');
 app.enable('trust proxy');
 app.use(cookieParser());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
 app.use(express.static(__dirname + '/public'));
 //app.use(express.static(__dirname + '/views'));
 

 app.set('view  engine', 'ejs'); // set up ejs for templating
 //app.set('view  engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

 app.use(morgan('dev'));
 app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

// to support cross platform
 const cors = require('cors');
app.use(cors());

//to configure routes
var service = require('./routes/ServiceRoute');
var auth=require('./routes/AuthRoute');
var imageUpload=require('./routes/ImageUpload');
var messageRoute=require('./routes/MessageRoute');
app.use('/', service);
app.use('/', auth);
app.use('/',imageUpload);
app.use('/',messageRoute);
 
// passport configuration
var User = require('./models/User');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(config.port);
console.log('Magic happens on port ' + config.port);