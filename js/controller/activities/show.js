angular.module('ares')
.controller("ActivitiesShowController", ['$scope', '$routeParams', 'Activity', function($scope, $routeParams, Activity){

  $scope.activity = {}

  Activity.show($routeParams.id).then(function(data){
    
    $scope.activity = data.data.activity;
    console.log($scope.activity);
  });
}]);