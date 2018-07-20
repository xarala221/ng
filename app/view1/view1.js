(
  function () {
    'use strict';
  
   var app = angular.module('myApp.view1', ['ngRoute'])
  
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/!view1/dashboard', {
      templateUrl: 'dashboard.html',
      controller: 'View1Ctrl'
    }) .when('/!view1/quiz',{
      templateUrl: 'quiz.html',
    });
  }]);
  
  app.controller('View1Ctrl', [function() {
  
  }]
  );
  }
)();