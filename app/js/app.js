// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
    .state('tabs',{
      url:"/tab",
      abstract:true,
      templateUrl:"templates/tabs.html"
    })
    .state('tabs.home',{
      url:"/home",
      views:{
        'home-tab':{
          templateUrl:"templates/home.html",
           controller:'HomeTabCtrl'
        }
      }
    })  
    .state('tabs.cards',{
      url:"/cards",
      views:{
        'cards-tab':{
          templateUrl:"templates/cards.html",
        }
      }
    }) 
    .state('tabs.festival',{
      url:"/festival",
      views:{
        'festival-tab':{
          templateUrl:"templates/festival.html",
          controller:'festivalTabCtrl'
        }
      }
    }) 
    .state('tabs.user',{
      url:"/user",
      views:{
        'user-tab':{
          templateUrl:"templates/user.html",
          controller:'UserTabCtrl'
        }
      }
    })
    .state('login',{
      url:"/login",
      views:{
        '':{
          templateUrl:"templates/login.html",
          controller:'loginTabCtrl'
        }
      }
    })
    .state('register',{
      url:"/register",
      views:{
        '':{
          templateUrl:"templates/register.html",
          controller:'registerTabCtrl'
        }
      }
    })
    .state('messageList',{
      url:"/messageList",
      views:{
        '':{
          templateUrl:"templates/messageList.html"
        }
      }
    })
    .state('message',{
      url:"/messageList/message",
      views:{
        '':{
          templateUrl:"templates/message.html"
        }
      }
    })
    .state('opinion',{
      url:"/opinion",
      views:{
        '':{
          templateUrl:"templates/opinion.html"
        }
      }
    })
    .state('userDetail',{
      url:"/userDetail",
      views:{
        '':{
          templateUrl:"templates/userDetail.html",
          controller:'userDetailCtrl'
        }
      }
    })
    .state('changeUserDetail',{
      url:"/changeUserDetail",
      views:{
        '':{
          templateUrl:"templates/changeUserDetail.html",
          controller:'changeUserDetail'
        }
      }
    })
    .state('aboutUs',{
      url:"/aboutUs",
      views:{
        '':{
          templateUrl:"templates/aboutUs.html"
        }
      }
    })
    .state('cardDetail',{
      url:"/cardDetail",
      cache:'false',
      views:{
        '':{
          templateUrl:"templates/cardDetail.html",
          controller:'cardDetail'
        }
      }
    })
    .state('cardShare',{
      url:"/cardShare",
      cache:'false',
      views:{
        '':{
          templateUrl:"templates/cardShare.html",
          controller:'cardShare'
        }
      }
    })
    .state('festivalDetail',{
      url:"/festivalDetail",
      cache:'false',
      views:{
        '':{
          templateUrl:"templates/festivalDetail.html",
          controller:'festivalDetail'
        }
      }
    })
    .state('festivalShare',{
      url:"/festivalShare",
      cache:'false',
      views:{
        '':{
          templateUrl:"templates/festivalShare.html",
          controller:'festivalShare'
        }
      }
    })
    .state('myCollection',{
      url:"/myCollection",
      cache:'false',
      views:{
        '':{
          templateUrl:"templates/myCollection.html",
          // controller:'myCollection'
        }
      }
    });  
    $urlRouterProvider.otherwise("/tab/home");
})