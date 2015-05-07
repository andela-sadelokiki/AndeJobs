module.exports = function(app) {

 	 
 	 var userCtrl = require('../controllers/user-controller');

	  app.post('/api/v1/user', userCtrl.createUser);
	  app.get('/api/v1/users', userCtrl.listUsers);
	  app.get('/api/v1/users/:user_id', userCtrl.viewUser);
	  app.delete('/api/v1/users', userCtrl.deleteUsers);
	  app.delete('/api/v1/users/:user_id', userCtrl.deleteUser);


	}

