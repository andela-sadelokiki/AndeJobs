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
	User.findById(req.params.event_id, function(err, user){
		if(err){
			res.send(err);
		}
		res.json(user);
	})
}

exports.deleteUsers = function(req, res){
	User.remove(function(err, users){
		if(err){
			res.send(err);
		}
		res.json(users);
	});
};
exports.deleteUser = function(req, res){
	User.remove({_id: req.params.event_id}, function(err, user){
		if(err){
			res.send(err);
		}
		res.json(user);
	});
};
