angular.module('ares')
.controller("EventIndexController", ['$scope', '$routeParams', 'Event', function($scope, $routeParams, Event){

  $scope.events = {}

  Event.List().then(function(data){

    $scope.events = data.data;
    console.log($scope.events);
  });
}]);