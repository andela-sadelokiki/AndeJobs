'use strict';

var User = require('../models/user.model');
var jwt = require('jsonwebtoken');
var db = require('../../config/config');

exports.signup = function(req, res) {
  var user = new User();
  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.email = req.body.email;
  user.password = req.body.password;
  user.username = req.body.username;
  user.mobilenumber = req.body.mobilenumber;

  user.save(function(err, user) {
    if (!req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password || !req.body.username || !req.body.mobilenumber) {
      console.log(err, 'err');
      return res.status(401).send({
        success: false,
        message: 'Invalid Registration details'
      });
    } else if (err) {
      if (err.code === 11000) {
        return res.status(401).send({
          success: false,
          message: 'User already exists'
        });
      } else {
        return res.status(401).send(err);
      }
    } else {
      user.token = jwt.sign(user, db.secret, {
        expiresInSeconds: 1440
      });
      user.save(function(err, newUser) {
        res.json({
          success: true,
          user: newUser,
          message: 'User successsfully registered'
        });
      });
    }
  });
};

exports.login = function(req, res) {
  User.findOne({
      username: req.body.username
    })
    .select('username password')
    .exec(function(err, user) {
      if (err) {
        throw err;
      } else if (!user) {
        return res.status(401).send({
          success: false,
          message: 'user not found'
        });
      } else {
        var validPassword = user.comparePassword(req.body.password);
        if (!validPassword) {
          return res.status(401).send({
            success: false,
            message: 'Authentication failed. Wrong password.'
          });
        } else {
          // var token = jwt.sign(user, db.secret, {
          //   expiresInMinutes: 1440
          // });
          res.json({
            token: user.token,
            data: user
          });
          // });
        }
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
