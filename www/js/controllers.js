angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});s
  $scope.showSelectValue = function(mySelect) {
    if(mySelect=="Celsius"){
      $scope.getAllData("metric");
    }else if(mySelect=="Fahrenheit"){
      $scope.getAllData("imperial");
    }
	else if(mySelect=="Kelvin"){
      $scope.getAllData("kelvin");
    }

  }
$scope.getAllData=function(units){
    chats = Chats.all(units);
    chats.then(function(resp){
      Chats.chats=resp.data.list;
      $scope.chats = Chats.chats;
    });
};

$scope.getAllData("metric");

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
