(function(){
  'use strict';

  angular.module('quik-task', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/priorities', {templateUrl:'/views/priorities/priorities.html', controller:'PrioritiesCtrl'})
    .when('/tasks', {templateUrl:'/views/tasks/task.html', controller:'TasksCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();

