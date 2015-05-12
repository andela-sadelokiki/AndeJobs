'use strict';

var mongoose = require('mongoose');
require('../models/user.model');
var User = mongoose.model('users');
var jwt = require('jsonwebtoken');
var secret = "mysecretkey";


exports.createUser = function(req, res) {
	User.create(req.body, function(err, user){
		if(err){
			res.send(err);
		}
		res.json(user);
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

/*exports.verifyUser = function(req, res){
  User.findOne({ firstname: req.body.firstname }, function(err, user) {
    if (err){
      res.status(500).send(err);
    }
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } 
    else if (user) {
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } 
      else {
        var token = jwt.sign(user, app.get('et'), {
          expiresInMinutes: 1440 
        });
        res.json({
          success: true,
          message: 'Here is your token!',
          token: token
        });
      }   
    }
  });
};*/


