angular.module('ares')
.controller("ActivityCreateController", ['$scope', '$route' ,'$routeParams', '$location', 'Activity', 
function($scope, $route ,$routeParams, $location, Activity){

  $scope.event = {};
  
  $scope.add = function(activity){
    activity.event_id = $routeParams.id;
    $location.path("/events/" + $routeParams.id);
    Activity.Create(activity);
    $route.reload();
  }
}]);