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
      if($scope.cuidad==null){
    if(mySelect=="Celsius"){
      $scope.getAllData("metric","cancun");
    }else if(mySelect=="Fahrenheit"){
      $scope.getAllData("imperial","cancun");
    }else if(mySelect=="Kelvin"){
      $scope.getAllData("kelvin","cancun");
    }
  } else{
    if(mySelect=="Celsius"){
      $scope.getAllData("metric",$scope.actual.cuidad);
    }else if(mySelect=="Fahrenheit"){
      $scope.getAllData("imperial",$scope.actual.cuidad);
    }else if(mySelect=="Kelvin"){
      $scope.getAllData("kelvin",$scope.actual.cuidad);
    }
  }
}
  $scope.actual = {}
  $scope.changeCity = function(){
      $scope.getAllData("metric",$scope.actual.cuidad);
  }
$scope.getAllData=function(units,city){
    chats = Chats.all(units,city);
    chats.then(function(resp){
      Chats.chats=resp.data.list;
      $scope.chats = Chats.chats;
    });
};

$scope.getAllData("metric","cancun");

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
