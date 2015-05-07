  module.exports = function(app) {

  var jobCtrl = require('./controllers/job-controller');
  var userCtrl = require('./controllers/user-controller');


  app.post('/createUser', userCtrl.createUser);
  app.get('/listUsers', userCtrl.listAllUsers);
  app.get('/viewUser/:event_id', userCtrl.viewUser);
  app.delete('/deleteUsers', userCtrl.deleteUsers);
  app.delete('/deleteUser/:event_id', userCtrl.deleteUser);

  

  app.post('/postJob', jobCtrl.postJob);
  app.get('/listJobs', jobCtrl.listAllJobs);
  app.get('/listJob/:event_id', jobCtrl.listOneJob);
  app.put('/editJob/:event_id', jobCtrl.updateJob);
  app.delete('/deleteJob', jobCtrl.deleteAllJobs);
  app.delete('/deleteJob/:event_id',jobCtrl.deleteOneJob);

}

  