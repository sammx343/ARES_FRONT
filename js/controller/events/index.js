angular.module('ares')
.controller("EventIndexController", ['$scope', '$routeParams', 'Event', 'URL', '$http',
  function($scope, $routeParams, Event, URL, $http){

  $scope.events = {}

  $scope.uploadFile = function(files) {
    swal({
      title: "Enviar Lista",
      text: "¿Estás seguro de querer enviar esta lista de usuarios?",
      type: "info",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Aceptar",
      closeOnConfirm: false
    },
    //ESTA FUNCIÓN PERMITE LEER UN ARCHIVO Y ENVIARLO COMO POST
    function(){
      var fd = new FormData();
      fd.append("file", files[0]);
      console.log(URL.LINK+"/users/import");
      $http.post(URL.LINK+"/users/import", fd, {
          withCredentials: true,
          headers: {'Content-Type': undefined },
          transformRequest: angular.identity
      }).then(function successCallback(response) {
          swal({title: "Archivo envíado", 
            type: "success"
          });
        },function errorCallback(response) {
          swal({
            title: "Error",
            text: "Hubo un error",
            type: "danger",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: true
          });
          console.log(response.status);
        });
    });
  };

  Event.List().then(function(data){
    $scope.events = data.data;
    console.log($scope.events);
  });
}]);