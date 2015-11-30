// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){

  $stateProvider

  .state('menu', {
    url:'/menu',
    templateUrl:'templates/menu.html',
    abstract:true,
    controller:''
  })

  .state('menu.home', {
    url:'/home',
    views:{
      'menuContent':{
        templateUrl:'templates/home.html',
        controller:'AppCtrl'
      }
    }
  })

  .state('menu.semak', {
    url:'/semak',
    views:{
      'menuContent':{
        templateUrl:'templates/semak.html',
        controller:''
      }
    }
  })

  .state('menu.eLesen', {
    url:'/eLesen',
    views:{
      'menuContent':{
        templateUrl:'templates/eLesen.html',
        controller:''
      }
    }
  })

  .state('menu.eKompaun', {
    url:'/eKompaun',
    views:{
      'menuContent':{
        templateUrl:'templates/eKompaun.html',
        controller:''
      }
    }
  })

  .state('menu.eBayar', {
    url:'/eBayar',
    views:{
      'menuContent':{
        templateUrl:'templates/eBayar.html',
        controller:''
      }
    }
  })

  .state('menu.eAduan', {
    url:'/eAduan',
    views:{
      'menuContent':{
        templateUrl:'templates/eAduan.html',
        controller:''
      }
    }
  })

  .state('menu.help', {
    url:'/help',
    views:{
      'menuContent':{
        templateUrl:'templates/help.html',
        controller:''
      }
    }
  })


  $urlRouterProvider.otherwise('/menu/home');

})