angular.module('ares')
.controller("ActivityUsersController", ['$scope', '$route' ,'$routeParams', '$location', 'Event', 'Activity', 'User', 'NgTableParams',
function($scope, $route ,$routeParams, $location, Event, Activity, User, NgTableParams){

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
    var userActivities = [];

    $scope.usersToAdd.forEach(function mapUsers(user, index){
      var user_activity = {
        "user_id" : user.id,
        "activity_id": $routeParams.id
      }
      userActivities.push(user_activity);
    });
    Activity.AddUser(userActivities).then(
      function success(data){
        swal({title: "Usuario Agregado", 
          type: "success"
        });
        $location.path("/events/" + $routeParams.event_id + "/activities/" + $routeParams.id);
        $route.reload();
    },function error(response) {
      console.log(response);
      swal({title: "Hubo un error agregando " + response.config.data.user_activity.length + " usuarios", 
        type: "error"
      });
    });
  }

  User.List().then(function(data){
    $scope.tp = new NgTableParams({ count: 50 }, { counts: [50, 100, 300],dataset: data.data });
  });
}]);