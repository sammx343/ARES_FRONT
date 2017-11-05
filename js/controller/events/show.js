angular.module('ares')
.controller("EventShowController", ['$scope', '$route', '$routeParams', '$location', 'Event', 'URL', 'NgTableParams',
function($scope, $route, $routeParams, $location, Event, URL, NgTableParams){

  $scope.event = {}

  Event.Show($routeParams.id).then(function(data){
    $scope.event = data.data.event;
    $scope.tp = new NgTableParams({ count: 10 }, { counts: [5, 10, $scope.event.user_events.length], dataset: $scope.event.user_events});
  });

  $scope.deleteEvent = function(){
    swal({
      title: "Estás seguro de querer borrar este evento?",
      text: "El evento será borrado, junto con todas las actividades que este poséa",
      type: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Aceptar",
      closeOnConfirm: false
    },
    function(){
      Event.Delete($routeParams.id).then(function(data){
        swal({title: "Borrado", 
              text: "El evento ha sido borrado", 
              type: "success"
            });  
        $location.path("/events");
        $route.reload();
      },function(){
        swal({title: "Error", 
              text: "El evento no se pudo borrar", 
              type: "error"
            });
      });
    });
  };

  $scope.deleteUser = function(id){
    swal({
      title: "Se desvinculará este usuario del evento",
      type: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Aceptar",
      closeOnConfirm: false
    },
    function(){
      Event.DeleteUser(id).then(function(data){
        swal({title: "El usuario ha sido desvinculado", 
              type: "success"
            });
        $location.path("/events/" + $routeParams.id);
        $route.reload();
      });
    });
  }
}]);