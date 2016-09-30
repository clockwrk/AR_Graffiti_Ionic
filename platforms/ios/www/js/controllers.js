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

  $scope.takePicture = function(){

    $ionicPlatform.ready(function(){

      var video = document.querySelector("#videoElement");
 
      navigator.getUserMedia =  navigator.getUserMedia || 
                                navigator.webkitGetUserMedia || 
                                navigator.mozGetUserMedia || 
                                navigator.msGetUserMedia || 
                                navigator.oGetUserMedia;
 
      if (navigator.getUserMedia) {       
          navigator.getUserMedia({video: true}, handleVideo, videoError);
      }
       
      function handleVideo(stream) {
          video.src = window.URL.createObjectURL(stream);
      }
       
      function videoError(e) {
          // do something
      }


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
    })

  } /* End of takePicture */

  
});

// 
