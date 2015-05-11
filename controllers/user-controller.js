'use strict';

var mongoose = require('mongoose');
require('../models/user.model');
var User = mongoose.model('users');


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
			res.send(err);
		}
		res.json(user);
	});
};
exports.authenticate = function(req, res){
User.findOne({firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, username: req.body.username, mobilenumber:req.body.mobilenumber, password: req.body.password}, function(err, user) {
  if (err) {
    res.json({
      type: false,
      data: "Error occured: " + err
  });
} else 
  {
    if (user) {
      res.json({
       type: true,
       data: user,
       token: user.token
    }); 
    } else {
        res.json({
          type: false,
          data: "Incorrect email/password"
        });    
        }
    }
});
};
exports.signIn = function(req, res){
User.findOne({firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, username: req.body.username, mobilenumber:req.body.mobilenumber, password: req.body.password}, function(err, user) {
  if (err) {
    res.json({
      type: false,
      data: "Error occured: " + err
  });
}
    else {
    if (user) {
    res.json({
        type: false,
        data: "User already exists!"
    });
    }
else {
  var userModel = new User();
  userModel.firstname = req.body.firstname;
  userModel.lastname = req.body.lastname;
  userModel.email = req.body.email;
  userModel.username = req.body.username;
  userModel.mobilenumber = req.body.mobilenumber;
  userModel.password = req.body.password;
  userModel.save(function(err, user) {
      user.token = jwt.sign(user, process.env.JWT_SECRET);
      user.save(function(err, user1) {
          res.json({
              type: true,
              data: user1,
              token: user1.token
          });
      });
  })
}
}
});
});

