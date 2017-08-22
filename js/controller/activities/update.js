angular.module('ares')
.controller("ActivitiesUpdateController", ['$scope', '$filter', '$route' ,'$routeParams', '$location', 'Activity', 
function($scope, $filter, $route, $routeParams, $location, Activity){

  $scope.activity = {};
  console.log("huef");
  Activity.Show($routeParams.id).then(function(data){
    $scope.activity = data.data.activity;
    $scope.activity.initial_time = new Date($scope.activity.initial_time);
    $scope.activity.final_time = new Date($scope.activity.final_time);
    console.log($scope.activity);
  });

  $scope.update = function(activity){
    Activity.Update(activity, $routeParams.id);
    $location.path("/events/" + $routeParams.event_id + "/activities/" + $routeParams.id);
    $route.reload();
    console.log("coso");
  }
}]);