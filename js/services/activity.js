angular.module('ares')
.factory('Activity', ['$http', 'URL', function ActivityFactory($http, URL){
  return {
    Show : function(id){
      return $http({method: 'GET', url: URL.LINK + "/activities/" + id})
    },
    Create : function(activity){
      alert("aqui hace un post");
      console.log(activity);
      alert(URL.LINK + "/activities");
      return $http({method: 'POST', url: URL.LINK + "/activities/", data: {activity}})
    }
  }
}]);