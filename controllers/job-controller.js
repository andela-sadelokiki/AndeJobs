var mongoose = require('mongoose');
require('../models/job.model');
var Job = mongoose.model('jobs');


exports.postJob = function(req, res) {
	Job.create(req.body, function(err, job){
		if(err){
			res.send(err);
		}
		res.json(jobs);
	});
};
exports.listAllJobs = function(req, res){
	Job.find(function(err, jobs){
		if(err){
			res.send(err);
		}
		res.json(jobs);
	})
}
exports.listOneJob = function(req, res){
	Job.findById(req.params.event_id, function(err, job){
		if(err){
			res.send(err);
		}
		res.json(job);
	})
}
exports.updateJob = function(req, res){
	Job.findById(req.params.event_id, function(err, job){
		if(err){
			res.send(err);
		}
		job.title = req.body.title;
		job.details = req.body.details;

		job.save(function(err){
			if (err){
				res.send(err);
			}
			res.json({message: 'job updated'});
		});
	});

};
exports.deleteAllJobs = function(req, res){
	Job.remove(function(err, jobs){
		if(err){
			res.send(err);
		}
		res.json(jobs);
	});
};
exports.deleteOneJob = function(req, res){
	Job.remove({_id: req.params.event_id}, function(err, job){
		if(err){
			res.send(err);
		}
		res.json(job);
	});
};