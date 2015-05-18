
var express = require('express');
var router = express.Router();
module.exports = function(app) {

 	 var jobCtrl = require('../controllers/job-controller');

   router.route('/jobs')
    .get(jobCtrl.listAllJobs)
    .post(jobCtrl.postJob)
    

  router.route("/jobs/:job_id")
    .get(jobCtrl.listOneJob)
    .put(jobCtrl.updateJob)
    .delete(jobCtrl.deleteOneJob)

app.use('/api', router)
};

