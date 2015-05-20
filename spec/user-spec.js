'use strict';

require('../models/user.model');

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/myDatabase');;
User = mongoose.model('user');

var user, user2

describe('User model test:', function(){

  beforeEach(function(done){
    user = new User();
    user2 = new User();
    done();
  });


  describe('should not save if required field is not filled', function(){
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
    it('should not save if password is not filled', function(done){
      user.password = '';
      user.save(function(error){
        expect(error).not.toBeNull();
        done();
      });
    });

    it('should not save if a unique field is duplicated', function(done) {
      user.firstname = 'ladi';
      user.lastname = 'adenusi';
      user.email = 'ladi.adenusi@andela.co';
      user.password = 'honey';
      user.username = 'ladisays';
      user.mobilenumber = 6867267;
      user.save();

      user2.firstname = 'ladi';
      user2.lastname = 'adenusi';
      user2.email = 'ladi.adenusi@andela.co';
      user2.password = 'honey';
      user2.username = 'ladisays';
      user2.mobilenumber = 6867267;
      return user2.save(function(error) {
        expect(error).not.toBeNull();
        done();
      });
    });
  });
});