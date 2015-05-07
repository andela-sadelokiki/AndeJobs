require('../models/user.model');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDatabase');;
User = mongoose.model('users');

var user, user2

describe('User model test:', function(){

	beforeEach(function(done){
		user = new User();
		done();
	});

	describe('should not save if firstname field is not filled', function(){
		it('should not save if firstname is not filled', function(done){
			user.firstname = '';
			user.save(function(error){
				expect(error).not.toBeNull();
				// console.log(error);
				done();
			});
		});

		it('should not save if lastname is not filled', function(done){
			user.lastname = '';
			user.save(function(error){
				expect(error).not.toBeNull();
				done();
			});
		});

		it('should not save if email is not filled', function(done){
			user.email = '';
			user.save(function(error){
				expect(error).not.toBeNull();
				done();
			});
		});

		it('should save required field is filled', function(){
			user.firstname = 'susan';
			user.lastname = 'adelokiki';
			user.email = 'susan.adelokiki@andela.co';
			user.password = 'honey';
			user.save(function(error){
				expect(error).toBeNull();
				done();
			});
		});

	});
})