angular.module('ares')
.controller("EventUsersController", ['$scope', '$route' ,'$routeParams', '$location', 'Event', 'User',
function($scope, $route ,$routeParams, $location, Event, User){

  $scope.invites = [];
  $scope.event = {};

  $scope.add = function(event){
    Event.Create(event);
    console.log(event); 
    $location.path("/events");
    $route.reload();
  }

  User.List().then(function(data){
    $scope.invites = data.data;
  });
}]);