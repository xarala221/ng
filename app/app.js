(function (){
    'use strict';

    // Declare app level module which depends on views, and components
    var app = angular.module('myApp', [
      'ngRoute',
      'myApp.view1',
    ]).
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider.otherwise({redirectTo: '/'});
    }]);
    
})();
/*
(function () {
    'use strict';

    angular
        .module('myApp', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            //.when('/', {
              //  templateUrl: 'index.html',
            //})
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'index.html',
                controllerAs: 'vm'
            //})
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'auth/login.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'auth/register.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
            //.otherwise({ redirectTo: '/' });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();

*/