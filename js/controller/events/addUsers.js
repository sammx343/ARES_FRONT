angular.module('ares')
.controller("EventUsersController", ['$scope', '$route' ,'$routeParams', '$location', 'Event', 'User', 'NgTableParams',
function($scope, $route ,$routeParams, $location, Event, User, NgTableParams){

  $scope.event = {};
  $scope.usersToAdd = [];

  Event.Show($routeParams.id).then(function(data){
    $scope.event = data.data.event;
  });

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
    var userEvents = [];

    $scope.usersToAdd.forEach(function mapUsers(user, index){
      var user_event = {
        "user_id" : user.id,
        "event_id": $routeParams.id
      }
      userEvents.push(user_event);
    });

    Event.AddUser(userEvents).then(
      function success(data){
        swal({title: "Usuario Agregado", 
          type: "success"
        });
        $location.path("/events/" + $routeParams.id);
        $route.reload();
    },function error(response) {
      swal({title: "Hubo un error agregando " + response.data.length + " usuarios", 
        type: "error"
      });
    });
  }

  User.List().then(function(data){
    console.log(data.data);
    $scope.tp = new NgTableParams({ count: 50 }, { counts: [50, 100, 300],dataset: data.data });
  });
}]);