angular.module('ares')
.factory('Event', ['$http', 'URL', function EventFactory($http, URL){
  return {
    List: function(){
      return $http({method: 'GET', url: URL.LINK + "/events"})
    },
    Show : function(id){
      return $http({method: 'GET', url: URL.LINK + "/events/" + id})
    },
    Create : function(event){
      return $http({method: 'POST', url: URL.LINK + "/events/", data: {event}})
    },
    Update : function(event, id){
      return $http({method: 'PATCH', url: URL.LINK + "/events/" + id, data: {event}})
    },
    Delete : function(id){
      return $http({method: 'DELETE', url: URL.LINK + "/events/" + id})
    },
    AddUser : function(user_events){
      return $http({method: 'POST', url: URL.LINK + "/events/linkuser", data: user_events})
    },
    DeleteUser : function(id){
      return $http({method: 'POST', url: URL.LINK + "/events/linkuser/delete", data: {"id" : id}})
    }
  }
}]);