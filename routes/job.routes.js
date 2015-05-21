'use strict'

var express = require('express');
var router = express.Router();


module.exports = function(app){
  var jobCtrl = require('../controllers/job-controller'); 

  router.route('/jobs')
    .get(jobCtrl.listAllJobs)
    .post(jobCtrl.postJob)

  router.route('/jobs/:job_id')
    .get(jobCtrl.listOneJob )
    .put(jobCtrl.updateJob)
    .delete(jobCtrl.deleteOneJob)

  router.route('/jobs/:job_id/apply')
    .post(jobCtrl.apply)

  router.route('/jobs/:user_id/applications')
    .get(jobCtrl.getApplications)

  router.route('/jobs/:job_id/applicants')
    .get(jobCtrl.getApplicants)

app.use('/api', router)
};

