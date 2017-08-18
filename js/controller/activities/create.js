angular.module('ares')
.controller("ActivityCreateController", ['$scope', '$route' ,'$routeParams', '$location', 'Activity', 
function($scope, $route ,$routeParams, $location, Activity){

  $scope.add = function(activity){
    activity.event_id = $routeParams.id;
    console.log(activity);
    Activity.Create(activity);
  }
}]);