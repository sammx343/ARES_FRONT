angular.module('ares')
.controller("UserCreateController", ['$scope', '$route' ,'$routeParams', '$location', 'User', 
function($scope, $route ,$routeParams, $location, Event){
  $scope.id_type = ["CC", "TI", "PASAPORTE", "CC EXTRANJERÍA", "OTRO"];
  $scope.user = {};
  $scope.rolIsAdmin = false;
  $scope.roles = ["invitado", "admin"];

  $scope.selectedItemChanged = function(){
    if($scope.user.role == "admin"){
      $scope.rolIsAdmin = true;
    }else{
      $scope.rolIsAdmin = false;
    }
  }
}]);