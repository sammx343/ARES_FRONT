angular.module('ares')
.controller("EventCreateController", ['$scope', '$route' ,'$routeParams', '$location', 'Event', 
function($scope, $route ,$routeParams, $location, Event){

  $scope.event = {}

  $scope.add = function(event){
    Event.Create(event);
    console.log(event);
    $location.path("/events");
    $route.reload();
  }
}]);