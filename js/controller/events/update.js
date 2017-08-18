angular.module('ares')
.controller("EventUpdateController", ['$scope', '$filter', '$route' ,'$routeParams', '$location', 'Event', 
function($scope, $filter, $route, $routeParams, $location, Event){

  $scope.event = {};

  Event.Show($routeParams.id).then(function(data){
    $scope.event = data.data.event;
    $scope.event.initial_date = new Date($scope.event.initial_date);
    $scope.event.final_date = new Date($scope.event.final_date);
  });

  $scope.update = function(event){
    Event.Update(event, $routeParams.id);
    $location.path("/events/" + $routeParams.id);
    $route.reload();
    console.log("coso");
  }
}]);