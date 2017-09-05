angular.module('ares')
.controller("EventUsersController", ['$scope', '$route' ,'$routeParams', '$location', 'Event', 'User', 'NgTableParams',
function($scope, $route ,$routeParams, $location, Event, User, NgTableParams){

  $scope.invites = [];
  $scope.event = {};
  $scope.usersToAdd = [];

  $scope.add = function(event){
    Event.Create(event);
    console.log(event); 
    $location.path("/events");
    $route.reload();
  }

  $scope.addUsers = function(user){
    var index = $scope.usersToAdd.indexOf(user.identification);
    if(index == -1){
      $scope.usersToAdd.push(user);
    }else{
      $scope.usersToAdd.splice(index, 1);
    }
    console.log($scope.usersToAdd);
  }

  User.List().then(function(data){
    console.log(data.data);
    $scope.tp = new NgTableParams({ count: 50 }, { counts: [50, 100, 300],dataset: data.data });
  });
}]);