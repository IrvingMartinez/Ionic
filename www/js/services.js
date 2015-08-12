angular.module('starter.services', [])

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [];

  a= {
    chats:{},
    all: function(units) {
      return $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&id=3531673&APPID=143ffc47ae963adf95c8e2a4ccf660e3&units="+units+"&lang=es");
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {

      for (var i = 0; i < a.chats.length; i++) {
        console.log(a.chats[i].dt);
        if (a.chats[i].dt === parseInt(chatId)) {
          return a.chats[i];
        }
      }
      return null;
    }
  };
  return a;
});
