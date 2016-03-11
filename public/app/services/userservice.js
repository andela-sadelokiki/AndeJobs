"use strict";

var app = angular.module('Andejobs');
app.factory('UserService', ['$http', 'baseUrl', '$localStorage', function($http, baseUrl, $localStorage) {
  var User = {};
  User.register = function(user) {
    return $http.post(baseUrl + '/signup', user).then(function(res) {
      return res;
    });
  };
  User.getOneUser = function(id) {
    return $http.get(baseUrl + '/users/' + id).then(function(res) {
      return res.data;
    });
  };
  User.authenticate = function(param) {
    return $http.post(baseUrl + "/login", param).then(function(res) {
      return res;
    });
  };
  User.updateUser = function(id, params) {
    return $http.put(baseUrl + '/users/' + id, params).then(function(res) {
      return res;
    });
  };
  User.deleteUser = function(id) {
    return $http.delete(baseUrl + '/users/' + id).then(function(res) {
      return res;
    });
  };
  return User;
}]);
