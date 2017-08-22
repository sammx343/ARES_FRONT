angular.module('ares')
.controller("EventIndexController", ['$scope', '$routeParams', 'Event', 'URL', '$http',
  function($scope, $routeParams, Event, URL, $http){

  $scope.events = {}

  $scope.uploadFile = function(files) {
    var fd = new FormData();
    //Take the first selected file
    fd.append("file", files[0]);
    console.log(URL.LINK+"/users/import");
    $http.post(URL.LINK+"/users/import", fd, {
        withCredentials: true,
        headers: {'Content-Type': undefined },
        transformRequest: angular.identity
    })
  };

  Event.List().then(function(data){

    $scope.events = data.data;
    console.log($scope.events);
  });
}]);