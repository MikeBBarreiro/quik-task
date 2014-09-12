(function(){
  'use strict';

  angular.module('quik-task')
  .controller('TasksCtrl', ['$scope', 'Task', function($scope, Task){
    $scope.sort = 'name';
    $scope.task = {};
    $scope.tasks = [];
//.all grabs all the priorities from the DB in Node
    Task.all().then(function(response){
      $scope.tasks = response.data.tasks;
    });

    $scope.add = function(){
      Task.create($scope.task).then(function(response){
        debugger;
        $scope.tasks.push(response.data.task);
        $scope.task = {};
      });
    };
  }]);
})();
