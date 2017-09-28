angular.module('ares')
.controller("UserShowController", ['$scope', '$route', '$routeParams', '$location', 'User', 'Activity',
  function($scope, $route, $routeParams, $location, User, Activity){

  $scope.invited = {};
  $scope.activities = [];

  User.Show($routeParams.id).then(function(data){
    $scope.invited = data.data.user;
    console.log($scope.invited);
    var events = $scope.invited.events;
  });

  $scope.deleteUser = function(){
    User.Delete($scope.invited.id).then(function(data){
        swal({title: "Borrado", 
              text: "El usuario ha sido borrado", 
              type: "success"
        }); 
        $location.path("/events");
        $route.reload();
    });
  }
}]);