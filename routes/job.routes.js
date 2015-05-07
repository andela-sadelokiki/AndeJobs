module.exports = function(app) {

 	 var jobCtrl = require('../controllers/job-controller');
 	 
    app.post('/postJob', jobCtrl.postJob);
	  app.get('/listJobs', jobCtrl.listAllJobs);
		app.get('/listJob/:job_id', jobCtrl.listOneJob);
		app.put('/editJob/:job_id', jobCtrl.updateJob);
		app.delete('/deleteJob', jobCtrl.deleteAllJobs);
		app.delete('/deleteJob/:job_id',jobCtrl.deleteOneJob);

		app.param('job_id', jobCtrl.listOneJob);
		app.param('job_id', jobCtrl.updateJob);



};
