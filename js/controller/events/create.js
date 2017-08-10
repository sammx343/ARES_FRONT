angular.module('ares')
.controller("EventCreateController", ['$scope', '$routeParams', 'Event', function($scope, $routeParams, Event){

  $scope.event = {}

  $scope.add = function(event){
    Event.create(event);
    $location.path("/");
  }
}]);