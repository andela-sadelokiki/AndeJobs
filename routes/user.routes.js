module.exports = function(app) {

 	 
 	 var userCtrl = require('../controllers/user-controller');

	  app.post('/api/v1/users', userCtrl.createUser);
	  app.get('/api/v1/users', userCtrl.listUsers);
	  app.get('/api/v1/users/:user_id', userCtrl.viewUser);
    app.put('/api/v1/users/:user_id', userCtrl.updateUser);
	  app.delete('/api/v1/users/:user_id', userCtrl.deleteUser);
    app.post('/authenticate', userCtrl.authenticate);
}

