'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/!view1', {
    templateUrl: '../index.html',
    controller: 'View1Ctrl'
  })/*
  .when('/test'), {
    templateUrl: 'testform.html'
    
  }*/
}])

.controller('View1Ctrl', [function() {

}]);