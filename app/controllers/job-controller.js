'use strict';

var mongoose = require('mongoose');
require('../models/job.model');
require('../models/user.model');
var Job = mongoose.model('Job');
var User = mongoose.model('User');

exports.postJob = function(req, res) {
  Job.create(req.body, function(err, job) {
    if (err) {
      res.send(err);
    }
    res.json(job);
  });
};

exports.listAllJobs = function(req, res) {
  Job.find({})
    .populate('applicants')
    .exec(function(err, jobs) {
      if (err) {
        res.send(err);
      }
      res.json(jobs);
    });
};


exports.listOneJob = function(req, res) {
  Job.findById(req.params.id)
    .populate('applicants')
    .exec(function(err, job) {
      if (err) {
        res.send(err);
      }
      res.json(job);
    });
};

exports.updateJob = function(req, res) {
  var jobId = req.params.id;
  Job.update({
    _id: jobId
  }, {
    title: req.body.title,
    description: req.body.description,
    location: req.body.location
  }, function(err, job) {
    if (err) {
      return res.status(400).json(err);
    }
    return res.status(200).json(job);
  });
};

exports.deleteOneJob = function(req, res) {
  Job.remove({
    _id: req.params.id
  }, function(err, job) {
    if (err) {
      res.json(err);
    }
    res.json({
      job: job,
      message: 'Job deleted!'
    });
  });
};

exports.apply = function(req, res) {
  console.log(req.body.id, "request");
  User.findById(
    req.body.id,
    function(err, user) {
      if (err) {
        res.json(err);
      } else {
        console.log(user, "new user");
        Job.findByIdAndUpdate(
          req.params.id, {
            $addToSet: {
              applicants: user
            }
          },
          function(err, job) {
            if (err) {
              console.log(err, "error");
              return err;
            } else {
              console.log(job, "updated job");
              res.send({
                success: true,
                message: 'Application successful'
              });
            }
          });
      }
    });
};

// exports.getApplications = function(req, res) {
//   Job.findById(req.params.user_id).exec(function(err, job) {
//     if (err) {
//       return res.json(err);
//     }
//     res.json(job);
//   });
// };

exports.getApplicants = function(req, res) {
  Job.findById(req.params.job_id, function(err, job) {
    if (err) {
      res.send(err);
    }
    res.send(job.applicants);
  });
};
