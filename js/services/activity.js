angular.module('ares')
.factory('Activity', ['$http', 'URL', function ActivityFactory($http, URL){
  return {
    Show : function(id){
      return $http({method: 'GET', url: URL.LINK + "/activities/" + id})
    },
    Create : function(activity){
      /*alert("aqui hace un post");
      console.log(activity);
      alert(URL.LINK + "/activities");*/
      return $http({method: 'POST', url: URL.LINK + "/activities", data: {activity}})
    },
    Update : function(activity, id){
      console.log("llega en esta vuelta");
      return $http({method: 'PATCH', url: URL.LINK + "/activities/" + id, data: {activity}})
    },
    Delete : function(id){
      return $http({method: 'DELETE', url: URL.LINK + "/activities/" + id})
    }
  }
}]);