angular.module('ares')
.controller("EventUsersController", ['$scope', '$route' ,'$routeParams', '$location', 'Event', 'User', 'NgTableParams',
function($scope, $route ,$routeParams, $location, Event, User, NgTableParams){

  $scope.event = {};
  $scope.usersToAdd = [];

  $scope.addUsers = function(user){
    var index;
    var addUser;

    $scope.usersToAdd.forEach(function mapUsers(indexUser, number){
      if(indexUser.identification == user.identification){
        addUser = true;
        index = number;
      }
    });

    if(!addUser){
      $scope.usersToAdd.push(user);
    }else{
      $scope.usersToAdd.splice(index, 1);
    }
    $scope.addedTable = new NgTableParams({ count: 10 }, { counts: [5, 10, 20],dataset: $scope.usersToAdd});
  }

  $scope.sendUsers = function(){
    var userError = [];
    $scope.usersToAdd.forEach(function mapUsers(user, index){
      var user_event = {
        "user_id" : user.id,
        "event_id": $routeParams.id
      }
      Event.AddUser(user_event).then(
        function success(data){
          
      },function error(response) {
        if(response.status == 422)
          userError.push(user);
      });
    });
    if(userError.length>0){
      swal({title: "Hubo un error agregando ", 
        type: "error"
      });
    }else{
      swal({title: "Usuario Agregado", 
        type: "success"
      });
      $location.path("/events/" + $routeParams.id);
      $route.reload();
    }
  }

  User.List().then(function(data){
    console.log(data.data);
    $scope.tp = new NgTableParams({ count: 50 }, { counts: [50, 100, 300],dataset: data.data });
  });
}]);