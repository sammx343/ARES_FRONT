angular.module('ares')
.controller("EventCreateController", ['$scope', '$routeParams', '$location', 'Event', function($scope, $routeParams, $location, Event){

  $scope.event = {}

  $scope.add = function(event){
    Event.Create(event);
    console.log(event);
    $location.path("/events");
  }
}]);