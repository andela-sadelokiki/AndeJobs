'use strict';

var mongoose = require('mongoose');
require('../models/user.model');
var User = mongoose.model('users');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var secret = "mysecretkey";


exports.createUser = function(req, res) {
  var user = req.body;
  bcrypt.hash(user.password, 10, function(err, hash){
    user.password = hash;

    User.create(user, function(err, user){
      if(err){
        res.send(err);
      }
      res.json(user);
    });
  });
};

exports.listUsers = function(req, res){
	User.find(function(err, users){
		if(err){
			res.send(err);
		}
		res.json(users);
	})
}
exports.viewUser = function(req, res){
	User.findById(req.params.user_id, function(err, user){
		if(err){
			res.send(err);
		}
		res.json(user);
	})
}
exports.updateUser = function(req, res){
  User.findByIdAndUpdate(req.params.user_id, req.body, function(err, user){
    if(err){
      res.send(err);
    }
    res.json(user);
  })
}

exports.deleteUser = function(req, res){
	User.remove({_id: req.params.user_id}, function(err, user){
		if(err){
		}
		res.json(user);
	});
};

exports.verifyUser = function(req, res){
  User.findOne({email:req.body.email}, function(err, user) {
    if (err){
      res.status(500).send(err);
    }
    if(user.email){
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } 
      else {
        var token = jwt.sign(user, secret, {
          expiresInMinutes: 1440 
        });
        res.json({
          success: true,
          message: 'Here is your token!',
          token: token
        });
      } 
    } 
    else {
      res.json({ success: false, message: 'Authentication failed. User not found.' });  
    }
  });
};


exports.verifyToken = function(req, res){
  var token = req.body.token || req.query.token || req.headers[x-access-token];
    if(token){
      jwt.verify(token, secret, function(err, decoded){
        if(err){
          return res.json({success:false, message: "Failed to verify token"});
        }
        else {
          res.decoded = decoded;
          next();
        }
      });
    }
      else{
        return res.status(403).send({
          success:false,
          message: 'no token provided'
        });
      }
    } 

>>>>>>> master

