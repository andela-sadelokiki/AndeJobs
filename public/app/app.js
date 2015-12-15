'use strict';

var app = angular.module('Andejobs', ['ui.router', 'ngStorage']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {
          templateUrl: 'app/partials/nav.view.html',
          controller: 'UserCtrl'
        },
        'theView@home': {
          templateUrl: 'app/partials/home.view.html',
          controller: 'HomeCtrl'
        },
        'footer': {
          templateUrl: 'app/partials/footer.view.html',
          controller: 'UserCtrl'
        }
      }
    })
    .state('signup', {
      url: '/signup',
      views: {
        '': {
          templateUrl: 'app/partials/nav.view.html',
          controller: 'UserCtrl'
        },
        'theView@signup': {
          templateUrl: 'app/partials/signup.view.html',
          controller: 'UserCtrl'
        }
      }
    })
  $urlRouterProvider.otherwise('/');
  // $locationProvider.html5Mode(true);
}]);
