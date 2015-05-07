module.exports = function(app) {

 	 var jobCtrl = require('../controllers/job-controller');
 	 
    app.post('/api/v1/job', jobCtrl.postJob);
	  app.get('/api/v1/jobs', jobCtrl.listAllJobs);
		app.get('/api/v1/jobs/:job_id', jobCtrl.listOneJob);
		app.put('/api/v1/job/:job_id', jobCtrl.updateJob);
		app.delete('/api/v1/jobs', jobCtrl.deleteAllJobs);
		app.delete('/api/v1/jobs/:job_id',jobCtrl.deleteOneJob);
    
};
