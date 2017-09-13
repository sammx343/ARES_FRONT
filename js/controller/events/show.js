angular.module('ares')
.controller("EventShowController", ['$scope', '$route', '$routeParams', '$location', 'Event', 'URL', 'NgTableParams',
function($scope, $route, $routeParams, $location, Event, URL, NgTableParams){

  console.log($routeParams.id);
  $scope.event = {}

  Event.Show($routeParams.id).then(function(data){
    $scope.event = data.data.event;
    $scope.tp = new NgTableParams({ count: 10 }, { counts: [5, 10, 20], dataset: $scope.event.user_events});
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
      $location.path("/events");
      $route.reload();
      Event.Delete($routeParams.id).then(function(data){
        swal({title: "Borrado", 
              text: "El evento ha sido borrado", 
              type: "success"
            });
      });
    });
  };

  $scope.deleteUser = function(id){
    console.log(id);
    var user_event = {
      "id" : id
    }
    swal({
      title: "Se eliminará este usuario del evento",
      type: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Aceptar",
      closeOnConfirm: false
    },
    function(){
      //$location.path("/events");
      //$route.reload();
      Event.DeleteUser(id).then(function(data){
        swal({title: "Borrado", 
              text: "El evento ha sido borrado", 
              type: "success"
            });
      });
    });
  }
}]);