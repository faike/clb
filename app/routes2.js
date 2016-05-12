var express = require('express');
var passport = require('passport');
var User = require('./models/user');
var router = express.Router();
var Heading = require('./controllers/HeadingController')


router.get('/', function (req, res) {
    res.render('index', { user : req.user });
});

router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
        	return res.status(500).json({
        	err: err
      		});
        }

        passport.authenticate('local')(req, res, function () {
             return res.status(200).json({
		        status: 'Registration successful!'
		      });
        });
    });
});

router.post('/login', function(req, res, next) {
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
      res.status(200).json({
        status: 'Login successful!'
      });
    });
  })(req, res, next);
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});


router.post('/letter', Heading.create);

router.get('/letter', Heading.list);

router.get('/letter/:docId', Heading.read);

router.put('/letter/:docId', Heading.update);

router.get('/generateLetter/:docId', Heading.generateLetter);

router.param('docId', Heading.docByID);

module.exports = router;