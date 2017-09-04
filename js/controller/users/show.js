angular.module('ares')
.controller("UserShowController", ['$scope', '$routeParams', 'User', 'Activity',
  function($scope, $routeParams, User, Activity){

  $scope.invited = {};
  $scope.activities = [];

  User.Show($routeParams.id).then(function(data){
    $scope.invited = data.data.user;
    console.log($scope.invited);
    var events = $scope.invited.events;
  });

  $scope.deleteUser = function(){
    console.log("message");
  }
}]);