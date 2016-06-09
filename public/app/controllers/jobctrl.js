  'use strict';

  angular.module('Andejobs')
      .controller('JobCtrl', ['$scope', 'JobService', '$location', '$window', '$stateParams', function($scope, JobService, $location, $window, $stateParams) {
          (function($) {
              $(function() {
                  $('.modal-trigger').leanModal();
                  $('.parallax').parallax();
                  $('.scrollspy').scrollSpy();
                  $('.modal-trigger').leanModal();
                  $('.datepicker').pickadate({
                      selectMonths: true,
                      selectYears: 5
                  });
              });
          })(jQuery);

          $scope.alljobs = [];
          $scope.addJob = function() {
              JobService.post($scope.job).then(function(res) {
                  if (res.success === false) {
                      $location.path('/');
                  } else {
                      $scope.alljobs.push(res);
                      $window.sessionStorage.jobId = res._id;
                      $location.path('/jobs');
                  }
              }, function(err) {});
          };

          JobService.getAll().then(function(res) {
              $scope.alljobs = res.data;
          });

          $scope.apply = function(id) {
              $('#apply').openModal({
                  dismissible: true,
                  opacity: 0.7
              });
              JobService.getById(id).then(function(res) {
                  $scope.jobInfo = res;
              })
          };
      }]);
