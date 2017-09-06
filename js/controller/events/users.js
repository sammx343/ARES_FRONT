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
    $scope.usersToAdd.forEach(function mapUsers(user, index){
      var user_event = {
        "user_id" : user.id,
        "event_id": $routeParams.id
      }
      Event.AddUser(user_event).then(
        function success(data){
          swal({title: "Perfecto", 
            type: "success"
          });
      },function error(response) {
          swal({title: "Hubo un error agregando ", 
            type: "error"
          });
        });
    });
  }

  User.List().then(function(data){
    $scope.tp = new NgTableParams({ count: 50 }, { counts: [50, 100, 300],dataset: data.data });
  });
}]);