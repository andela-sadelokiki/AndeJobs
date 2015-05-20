'use strict';

var mongoose = require('mongoose');
require('../models/user.model');
var User = mongoose.model('user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var secret = "mysecretkey";
var _ = require("lodash");

// var susan = new User({_id: 0,name:'susan',age:22});
// susan.save(function(err){
//   if(err){
//     return handleError(err);
//   }
//   var job1 = new job({
//     title: "Software Developer",
//     appliedBy: susan._id
//   });
//   job1.save(function(err){
//     if(err){
//       return handleError(err);
//     }
//   });
// });

// job
// .findOne({title:"Software Developer"})
// .populate('appliedBy')
// .exec(function(err, job){
//   if(err){
//     return handleError(err);
//     console.log('The creator is ', story._creator.name);
//   }
// })



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
  User.find(function(err, user){
    if(err){
      res.send(err);
    }
    res.json(user);
  });
};

exports.viewUser = function(req, res){
  User.findById(req.params.user_id, function(err, user){
    if(err){
      res.send(err);
    }
    res.json(user);
  });
};

exports.updateUser = function(req, res){
  User.findById(req.params.user_id, function(err, user){
    if(err){
      res.send(err);
    } else {

      user = _.extend(user, req.body);
      user.save(function(err, user){
        if (err) {
          res.sen(err);
        } 

        res.json(user);
      })
    }
  });
};

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
    if(user){
      bcrypt.compare(req.body.password, user.password, function(err, valid){
        if(err){
          res.status(500).send(err);
        }
        if(!valid){
          res.status(401).send("Incorrect password");
        }
        var token = jwt.sign(user, secret, {
          expiresInMinutes: 1440
        });
        res.json({
          success:true,
          message:'Here is your token',
          token:token,
          isAdmin: user.isAdmin
        });
      });
    };
  });
};

exports.verifyToken = function(req, res){
  var token = req.body.token || req.query.token || req.headers["x-access-token"];
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
    };

