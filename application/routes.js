/**
 * Created by diogo on 01/12/15.
 */
(function () {
    'use strict';

    angular.module('mwa').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'pages/home/home.html'
            })
            .when('/login', {
                controller: 'LoginController',
                controllerAs: 'vm',
                templateUrl: 'pages/account/login.html'
            })
            .when('/logout', {
                controller: 'LogoutController',
                controllerAs: 'vm',
                templateUrl: 'pages/account/login.html'
            })
            .when('/timeline', {
                controller: 'ProductCreateCtrl',
                controllerAs: 'vm',
                templateUrl: 'pages/timeline/timeline.html'
            });

    });
})();