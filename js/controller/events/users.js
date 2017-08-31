angular.module('ares')
.controller("EventUsersController", ['$scope', '$route' ,'$routeParams', '$location', 'Event', 
function($scope, $route ,$routeParams, $location, Event){

  console.log("TTTT");
  $scope.event = {};

  $scope.add = function(event){
    Event.Create(event);
    console.log(event); 
    $location.path("/events");
    $route.reload();
  }
}]);