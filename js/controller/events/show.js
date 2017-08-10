angular.module('ares')
.controller("EventShowController", ['$scope', '$routeParams', 'Event', function($scope, $routeParams, Event){

  $scope.event = {}

  Event.Show($routeParams.id).then(function(data){

    $scope.event = data.data.event;
  });
}]);