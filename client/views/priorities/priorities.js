(function(){
  'use strict';

  angular.module('quik-task')
  .controller('PrioritiesCtrl', ['$scope', 'Priority', function($scope, Priority){
    $scope.sort = 'name';
    $scope.priority = {};
    $scope.priorities = [];
//.all grabs all the priorities from the DB in Node
    Priority.all().then(function(response){
      $scope.priorities = response.data.priorities;
    });

    $scope.add = function(){
      Priority.create($scope.priority).then(function(response){
        $scope.priorities.push(response.data.priority);
        $scope.priority = {};
      });
    };
  }]);
})();
