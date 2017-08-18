angular.module('ares')
.controller("ActivitiesShowController", ['$scope', '$routeParams', 'Activity', function($scope, $routeParams, Activity){

  $scope.activity = {}

  Activity.Show($routeParams.id).then(function(data){
    $scope.activity = data.data.activity;
  });
}]);