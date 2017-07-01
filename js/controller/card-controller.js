angular.module('ares')
.controller("CardController", ['$scope', '$routeParams', 'User', function($scope, $routeParams, User){

  $scope.invited = {}

  User.List().then(function(data){

    $scope.invites = data.data;
    $scope.invited = User.Get($routeParams.id, $scope.invites)[0]; 
  });
}]);