"use strict";

var app = angular.module('Andejobs');
app.factory('JobService', ['$http', 'baseUrl', '$localStorage', function($http, baseUrl, $localStorage) {
    var Job = {};
    Job.post = function(job) {
        return $http.post(baseUrl + '/jobs', job).then(function(res) {
            return res.data;
        });
    };
    Job.getAll = function() {
        return $http.get(baseUrl + '/jobs').then(function(res) {
            return res;
        });
    };
    Job.getOne = function(id) {
        return $http.get(baseUrl + '/jobs/' + id).then(function(res) {
            return res.data;
        });
    };
    return Job;

}]);
