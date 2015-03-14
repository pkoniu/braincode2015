// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ngAnimate', 'ionic', 'starter.controllers', 'ngCordova', 'tabSlideBox'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
      url: '/',
      templateUrl: 'templates/mainView.html',
      controller: 'HomeCtrl'
  })

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.main', {
    url: "/main",
    views: {
      'menuContent': {
        templateUrl: "templates/main.html"
      }
    }
  })

   .state('app.add', {
    url: "/add",
    views: {
      'menuContent': {
        templateUrl: "templates/add.html"
      }
    }
  })

  .state('app.stats', {
    url: "/stats",
    views: {
      'menuContent': {
        templateUrl: "templates/stats.html"
      }
    }
  })
    .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent': {
          templateUrl: "templates/settings.html",
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});

app.controller("SlideTabsCtrl", function($scope, $ionicSlideBoxDelegate){
  $scope.navSlide = function(index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  }
});
