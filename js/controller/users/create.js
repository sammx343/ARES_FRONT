angular.module('ares')
.controller("UserCreateController", ['$scope', '$route' ,'$routeParams', '$location', 'User', 
function($scope, $route ,$routeParams, $location, User){
  $scope.id_type = ["CC", "TI", "PASAPORTE", "CC EXTRANJERÍA", "OTRO"];
  $scope.user = {};
  $scope.rolIsAdmin = false;
  $scope.roles = ["invited", "admin"];

  $scope.selectedItemChanged = function(){
    if($scope.user.role == "admin"){
      $scope.rolIsAdmin = true;
    }else{
      $scope.rolIsAdmin = false;
    }
  }

  $scope.add = function(user){
    if(user.role == "invited"){
      user.password = "abcdefgh";
      user.password_confirmation = "abcdefgh";
    }
    console.log(user);
    User.Create(user).then(function(data){
      console.log(data);
      swal({
        title: "Usuario Creado",
        type: "success"
      },
      function(){
        $location.path("/users");
        $route.reload();
      });
    });
  }
}]);