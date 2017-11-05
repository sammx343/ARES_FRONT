angular.module('ares')
.controller("ActivityAddUsersController", ['$scope', '$route' ,'$routeParams', '$location', 'Event', 'Activity', 'User', 'NgTableParams',
function($scope, $route ,$routeParams, $location, Event, Activity, User, NgTableParams){

  $scope.event = {};
  $scope.usersToAdd = []; // Este array permite previsualizar los usuarios que se van a agregar según el checkbox

  $scope.addUsers = function(user){
    var index;
    var IsUserInsideArray = false;

    $scope.usersToAdd.forEach(function mapUsers(indexUser, number){
      if(indexUser.identification == user.identification){
        IsUserInsideArray = true;
        index = number; // Guarda la posición del usuario encontrado dentro del array de usersToAdd
      }
    });

    if(IsUserInsideArray == false){
      $scope.usersToAdd.push(user);
    }else{
      $scope.usersToAdd.splice(index, 1);
    }
    $scope.addedTable = new NgTableParams({ count: 10 }, { counts: [5, 10, 20],dataset: $scope.usersToAdd});
  }

  $scope.sendUsers = function(){
    var userActivities = [];

    $scope.usersToAdd.forEach(function mapUsers(user, index){
      var user_activity = { // Para agregar usuarios a una actividad, solo se manda el user_id y el activity_id, por eso se crea este objeto
        "user_id" : user.id,
        "activity_id": $routeParams.id
      }
      userActivities.push(user_activity); //Se manda un vector como parametro que contiene todos los seleccionados
    });
    Activity.AddUser(userActivities).then(
      function success(data){
        swal({title: "Usuario Agregado", 
          type: "success"
        });
        $location.path("/events/" + $routeParams.event_id + "/activities/" + $routeParams.id);
        $route.reload();
    },function error(response) {
      swal({title: "Hubo un error agregando " + response.config.data.user_activity.length + " usuarios", 
        type: "error"
      });
    });
  }

  User.List().then(function(data){
    $scope.tp = new NgTableParams({ count: 50 }, { counts: [50, 100, 300],dataset: data.data });
  });
}]);