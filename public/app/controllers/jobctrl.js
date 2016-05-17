  'use strict';

  angular.module('Andejobs')
      .controller('JobCtrl', ['$scope', 'JobService', '$location', function($scope, JobService, $location) {

          $(document).ready(function() {
              // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
              $('.modal-trigger').leanModal();
          });

          (function($) {
              $(function() {
                  $('.modal-trigger').leanModal();
                  $('.parallax').parallax();
                  $('.scrollspy').scrollSpy();
                  $('#textarea1').val('n');
                  $('#textarea1').trigger('autoresize');

              });


          })(jQuery);

          $scope.addJob = function() {
              JobService.post($scope.job).then(function(res) {
                  if (res.success === false) {
                      console.log("failed to add new job!");
                      $location.path('/');
                  } else {
                      console.log("new job added successfully!");
                      $location.path('/jobs')
                  }
              }, function(err) {
                  console.log("an error occured", err);
              });
          };

          JobService.getAll().then(function(res) {
              $scope.alljobs = res.data;
          });

          JobService.getOneJob().then(function(res) {
            $scope.job = res.data;
          })
      }]);
