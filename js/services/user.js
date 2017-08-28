angular.module('ares')
.factory('User', ['$http',  'URL', function UserFactory($http, URL){
  return {
    List: function(){
      return $http({method: 'GET', url: URL.LINK + "/users"})
    },
    Show : function(id, invites){
      return $http({method: 'GET', url: URL.LINK + "/users/" + id})
    },
    Create : function(user){
      return $http({method: 'POST', url: URL.LINK + "/users", data: {user}})
    },
    Delete : function(id){
      return $http({method: 'DELETE', url: URL.LINK + "/users/" + id})
    }
  }
}]);