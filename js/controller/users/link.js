angular.module('ares')
.controller("UserLinkController", ['$scope', '$routeParams', 'User', 'Activity', 'Event',
  function($scope, $routeParams, User, Activity, Event){

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