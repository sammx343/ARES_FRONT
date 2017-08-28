angular.module('ares')
.controller("UserShowController", ['$scope', '$routeParams', 'User', 'Activity',
  function($scope, $routeParams, User, Activity){

  $scope.invited = {};
  $scope.activities = [];

  User.Show($routeParams.id).then(function(data){
    $scope.invited = data.data.user;
    var acts = $scope.invited.user_activities;
    acts.forEach(function(act){
      Activity.Show(act.activity_id).then(function(data){
        $scope.activities.push(data.data.activity);
      });
    });
  });

  $scope.deleteUser = function(){
    console.log("message");
  }
}]);