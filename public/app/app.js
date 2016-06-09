'use strict';

var app = angular.module('Andejobs', ['ui.router', 'ngStorage']);

app.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $httpProvider, $urlRouterProvider, $locationProvider) {

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
        .state('login', {
            url: '/login',
            views: {
                '': {
                    templateUrl: 'app/partials/nav.view.html',
                    controller: 'UserCtrl'
                },
                'theView@login': {
                    templateUrl: 'app/partials/signin.view.html',
                    controller: 'UserCtrl'
                }
            }
        })
        .state('dashboard', {
            url: '/dashboard',
            views: {
                '': {
                    templateUrl: 'app/partials/nav.view.html',
                    controller: 'UserCtrl'
                },
                'theView@dashboard': {
                    templateUrl: 'app/partials/dashboard.view.html',
                    controller: 'UserCtrl'
                }
            }
        })
        .state('availablejobs', {
            url: '/availablejobs',
            views: {
                '': {
                    templateUrl: 'app/partials/nav.view.html',
                    controller: 'UserCtrl'
                },
                'theView@availablejobs': {
                    templateUrl: 'app/partials/availablejobs.view.html',
                    controller: 'JobCtrl'
                }
            }
        })
        .state('jobs', {
            url: '/jobs',
            views: {
                '': {
                    templateUrl: 'app/partials/nav.view.html',
                    controller: 'UserCtrl'
                },
                'theView@jobs': {
                    templateUrl: 'app/partials/jobs.view.html',
                    controller: 'JobCtrl'
                }
            }
        })
        .state('createjob', {
            url: '/createjob',
            views: {
                '': {
                    templateUrl: 'app/partials/nav.view.html',
                    controller: 'UserCtrl'
                },
                'theView@createjob': {
                    templateUrl: 'app/partials/createjob.view.html',
                    controller: 'JobCtrl'
                }
            }
        })
        .state('job', {
            url: '/job',
            views: {
                '': {
                    templateUrl: 'app/partials/nav.view.html',
                    controller: 'UserCtrl'
                },
                'theView@job': {
                    templateUrl: 'app/partials/job.view.html',
                    controller: 'JobCtrl'
                }
            }
        })

    $urlRouterProvider.otherwise('/');
    // $locationProvider.html5Mode(true);

    $httpProvider.interceptors.push(['$q', '$location', '$window', function($q, $location, $window) {
        return {
            'request': function(config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    config.headers.Authorization = $window.sessionStorage.token;
                }
                return config;
            },
            'responseError': function(response) {
                if (response.status === 401 || response.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(response);
            }
        };
    }]);
}])

.run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
    $rootScope.$on('routeChangeStart', function(event, to) {
        if ($window.sessionStorage.refUrl && $window.sessionStorage.token) {
            var ref = $window.sessionStorage.refUrl;
            $window.sessionStorage.removeItem('refUrl');
            $location.url(ref);
        }
        if (to.data && to.data.requiresLogin) {
            if (!($window.sessionStorage.token || $location.search().token)) {
                event.preventDefault();
                $window.sessionStorage.refUrl = $location.url();
                $location.path('/login');
            }
        }
    });
}]);
