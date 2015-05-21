'use strict';

var mongoose = require('mongoose');
require('../models/job.model');
var Job = mongoose.model('job');

exports.postJob = function(req, res) {
	Job.create(req.body, function(err, job) {
		if(err){
			res.send(err);
		}
		res.json(job);
	});
};

exports.listAllJobs = function(req, res){
	Job.find(function(err, jobs){
		if(err){
			res.send(err);
		}
		res.json(jobs);
	});
};

exports.listOneJob = function(req, res){
	Job.findById(req.params.job_id, function(err, job){
		if(err){
			res.send(err);
		}
		res.json(job);
	});
};

exports.updateJob = function(req, res){
  Job.findByIdAndUpdate(req.params.job_id, req.body, function(err, job){
    if(err){
      res.send(err);
    }
    res.status(200).json(job);
  });
};

exports.deleteOneJob = function(req, res){
	Job.remove({_id: req.params.job_id}, function(err, job){
		if(err){
			res.json(err);
		}
		res.json({job: job, message: 'Job deleted!'});
	});
};

exports.apply = function(req, res){
	console.log('params',typeof(req.params.job_id));

	Job.findById(req.params.job_id, function(err,job){
		if(err){
			res.json(err);
		}

		var applicants = job.appliedBy.addToSet(req.body.user_id);
		if(!applicants.length){
			res.status(400).json({message: "Multiple application not permitted"});
		}
		else{
			job.save(function(err, job){
				if(err){
					res.json(err);
				}
				res.json(job);
			});
		}
	});
};

exports.getApplications = function(req, res){
	Job.findById(req.params.user_id).exec(function(err,job){
		if(err){
			return res.json(err);
		}
		res.json(job);
	});
};

exports.getApplicants = function(req, res){
	Job.findById(req.params.job_id, function(err, job){
		if(err){
			res.send(err);
		}
		res.send(job.appliedBy);
	});
};


