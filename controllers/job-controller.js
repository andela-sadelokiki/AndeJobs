var mongoose = require('mongoose');
require('../models/job.model');
var Job = mongoose.model('Job');


exports.postJob = function(req, res) {
	Job.create(req.body, function(err, job){
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
	})
}
exports.listOneJob = function(req, res){
	Job.findById(req.params.job_id, function(err, job){
		if(err){
			res.send(err);
		}
		res.json(job);
	})
}
exports.updateJob = function(req, res){
  Job.findByIdAndUpdate(req.params.job_id, req.body, function(err, job){
    if(err){
      res.send(err);
    }
    res.json({message: 'job successfully updated'});
  });
};

exports.deleteOneJob = function(req, res){
	Job.remove({_id: req.params.job_id}, function(err, job){
		if(err){
			res.json(err);
		}
		res.json({message: 'Job deleted!'});
	});
};