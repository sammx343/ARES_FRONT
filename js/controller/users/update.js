angular.module('ares')
.controller("UserUpdateController", ['$scope', '$route' ,'$routeParams', '$location', 'User', 
function($scope, $route ,$routeParams, $location, User){
  $scope.id_type = ["CC", "TI", "PASAPORTE", "CC EXTRANJERÍA", "OTRO"];
  $scope.user = {};
  $scope.rolIsAdmin = false;
  $scope.roles = ["invited", "admin"];

  $scope.user = {};
  $scope.activities = [];

  User.Show($routeParams.id).then(function(data){
    $scope.user = data.data.user;
    console.log($scope.user);
  });

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
    User.Update(user, $routeParams.id).then(function(data){
      swal({
        title: "Usuario Editado",
        type: "success"
      },
      function(){
        $location.path("/users/" + $routeParams.id);
        $route.reload();
      });
    },
    function(data){
      var error = data.data.errors;
      var message = "";

      if(error.identification)
        message = "Numero de identificación ya utilizado";
      else if(error.email)
        message = error.email;
      else if(error.password)
        message = "Contraseña " + error.password;
      
      console.log(data);
      swal({title: "Error", 
        type: "error",
        text: message
      });
    });
  }
}]);