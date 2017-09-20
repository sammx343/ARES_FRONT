angular.module('ares')
.controller("ActivitiesShowController", ['$scope', '$route', '$routeParams', '$location', 'Activity', 'NgTableParams',
  function($scope, $route, $routeParams, $location, Activity, NgTableParams){

  $scope.activity = {};
  $scope.event_id = $routeParams.event_id;
  console.log($scope.event_id);

  Activity.Show($routeParams.id).then(function(data){
    $scope.activity = data.data.activity;
    $scope.tp = new NgTableParams({ count: 10 }, { counts: [5, 10, $scope.activity.users_activities.length], dataset: $scope.activity.users_activities});
    console.log($scope.activity.users_activities);
  });

  $scope.deleteActivity = function(){
    swal({
      title: "Estás seguro de querer borrar esta Actividad?",
      text: "La actividad será borrada completamente.",
      type: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Aceptar",
      closeOnConfirm: false
    },
    function(){
      //$location.path("/events/" + $scope.event_id);
      //$route.reload();
      Activity.Delete($routeParams.id).then(function(data){
        swal({title: "Borrado", 
              text: "La actividad ha sido borrada", 
              type: "success"
            });
      });
    });
  };

  $scope.deleteUser = function(id){
    swal({
      title: "Se eliminará al usuario de esta actividad",
      type: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Aceptar",
      closeOnConfirm: false
    },
    function(){
      Activity.DeleteUser(id).then(function(data){
        $location.path("/events/" + $routeParams.event_id + "/activities/"+ $routeParams.id);
        $route.reload();
        swal({title: "Borrado", 
              text: "El usuario ha sido desvinculado", 
              type: "success"
            });
      });
    });
  }
}]);