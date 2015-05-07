module.exports = function(app) {

 	 
 	 var userCtrl = require('../controllers/user-controller');

	  app.post('/createUser', userCtrl.createUser);
	  app.get('/listUsers', userCtrl.listUsers);
	  app.get('/viewUser/:user_id', userCtrl.viewUser);
	  app.delete('/deleteUsers', userCtrl.deleteUsers);
	  app.delete('/deleteUser/:user_id', userCtrl.deleteUser);


	}


