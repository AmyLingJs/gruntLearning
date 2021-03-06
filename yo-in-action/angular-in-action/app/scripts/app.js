'use strict';

/**
 * @ngdoc overview
 * @name learnangularApp
 * @description
 * # learnangularApp
 *
 * Main module of the application.
 */
angular
  .module('learnangularApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
