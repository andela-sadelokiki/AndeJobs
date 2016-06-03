'use strict';

// var User = require('../models/user.model');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var jwt = require('jsonwebtoken');
var db = require('../../config/config');

exports.signup = function(req, res) {
  console.log(req.body, "req here");
  if (!req.body.firstname || !req.body.lastname || !req.body.username || !req.body.email || !req.body.password) {
    console.log(err, 'err');
    return res.status(401).send({
      success: false,
      message: 'Invalid Registration details'
    });
  }
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) {
      return next(err);
    }
    if (user) {
      return res.status(400).json({
        message: 'User already exists, login'
      });
    } else {
      var newUser = new User();
      newUser.firstname = req.body.firstname;
      newUser.lastname = req.body.lastname;
      newUser.username = req.body.username;
      newUser.email = req.body.email;
      newUser.setPassword(req.body.password);
      newUser.save(function(err, user) {
        if (err) {
          console.log(err, "error found");
          res.status(400).json({
            success: false,
            message: 'Creation failed'
          });
        }
        console.log(user, 'user created');
        res.status(200).json({
          token: user.generateJWT(),
          user: user.username,
          id: user._id,
          success: true,
          message: 'User registered'
        });
      });
    }
  });

};

exports.login = function(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      message: 'Please fill out all fields; username and password'
    });
  }
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) {
      res.status(400).json(err);
    }
    if (user) {
      if (user.validPassword(req.body.password)) {
        return res.status(200).json({
          id: user._id,
          success: true,
          message: 'token Created',
          token: user.generateJWT(),
        });
      } else {
        return res.status(401).json({
          message: 'Enter a valid password'
        });
      }
    } else {
      return res.status(401).json({
        message: 'Username not found'
      });
    }
  });
};

exports.middleware = function(req, res, next) {
  console.log('middleware', req.body);
  var token = req.body.token ||
    req.query.token ||
    req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, db.secret, function(err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
};

exports.viewUser = function(req, res) {
  User.find({
    username: req.body.username
  }, function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

exports.updateUser = function(req, res) {
  User.update({
      username: req.params.username
    },
    req.body,
    function() {
      res.json({
        message: 'User updated!'
      });
    });
};

exports.deleteUser = function(req, res) {
  User.remove({
      username: req.params.username
    },
    function(err) {
      if (err) {
        return res.send(err);
      }
      res.json({
        message: 'Successfully deleted'
      });
    });
};
