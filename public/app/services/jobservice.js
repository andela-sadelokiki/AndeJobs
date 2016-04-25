"use strict";

var app = angular.module('Andejobs');
app.factory('JobService', ['$http', 'baseUrl', '$localStorage', function($http, baseUrl, $localStorage) {
    var Job = {};
    Job.post = function(job) {
        return $http.post(baseUrl + '/jobs', job).then(function(res) {
            return res;
        });
    };
    return Job;
}]);
