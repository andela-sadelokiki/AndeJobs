var express = require('express');
var jobCtrl = require('../controllers/job-controller');
var userCtrl = require('../controllers/user-controller');
var router = express.Router();


router.route('/signup')
  .post(userCtrl.signup)

router.route('/login')
  .post(userCtrl.login);

router.route("/users/:username")
  .get(userCtrl.viewUser)
  .put(userCtrl.updateUser)
  .delete(userCtrl.deleteUser)

// router.use(userCtrl.middleware);

// router.route("/authenticate")
//   .post(userCtrl.verifyUser)

// router.route("/authenticateToken")
//   .post(userCtrl.verifyToken)

router.route('/jobs')
  //request for job gallery
  .get(jobCtrl.listAllJobs)

//request for new job creation
.post(jobCtrl.postJob)

router.route('/jobs/:id')
  .get(jobCtrl.listOneJob)
  .put(jobCtrl.updateJob)
  .delete(jobCtrl.deleteOneJob)

router.route('/apply/jobs/:id')
  .post(jobCtrl.apply)

// router.route('/jobs/:id/applications')
//   .get(jobCtrl.getApplications)

router.route('/applicants/jobs/:id')
  .get(jobCtrl.getApplicants)

module.exports = router;
