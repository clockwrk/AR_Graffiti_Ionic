angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
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
})

// Retrieve the photo

.controller('PictureCtrl', function($ionicPlatform, $scope, $cordovaCamera) {

  //$scope.cordovaObj = $cordovaCamera;

  // $scope.takePicture = function(){

  //   // $scope.imgURI = "got here";

  //   // document.addEventListener("deviceready", function () {
  //   $ionicPlatform.ready(function(){

  //     var options = {
  //       quality: 50,
  //       destinationType: Camera.DestinationType.DATA_URL,
  //       sourceType: Camera.PictureSourceType.CAMERA,
  //       allowEdit: true,
  //       encodingType: Camera.EncodingType.JPEG,
  //       targetWidth: 300,
  //       targetHeight: 300,
  //       popoverOptions: CameraPopoverOptions,
  //       saveToPhotoAlbum: false,
  //       correctOrientation:true
  //     };

  //     // }, false);

    

  //     $cordovaCamera.getPicture(options)
  //     .then(function(imageData) {
  //       $scope.imgURI = "data:image/jpeg;base64," + imageData;
  //       $scope.debug = "got here";
  //     })
  //     .catch(console.err)
  //   })

  // } /* End of takePicture */

  
});

// 
