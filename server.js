// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var db = require('./config/db');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');
var User = require('./app/models/user');
var Heading = require('./app/models/heading');
var routes = require('./app/routes2')

// config files
var db = require('./config/db');

mongoose.connect(db.url);



app = express();

app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs'); 
app.set('views',__dirname+'/app/views');


// Configuring Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(expressSession({secret: 'mySecretKey', 
	resave: false,
    saveUninitialized: false}));


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(function(user, done) {
  done(null, user._id);
});
 
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


app.use('/', routes);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
