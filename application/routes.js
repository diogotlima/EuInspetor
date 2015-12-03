/**
 * Created by diogo on 01/12/15.
 */
(function () {
    'use strict';

    angular.module('mwa').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'InicialController',
                controllerAs: 'vm',
                templateUrl: 'Inicial/index.html'
            })
            .when('/indicadores', {
                controller: 'IndicadoresController',
                controllerAs: 'vm',
                templateUrl: 'Inicial/index.html'
            })
            .when('/login', {
                controller: 'LoginController',
                controllerAs: 'vm',
                templateUrl: 'Login/login.html'
            })
            .when('/obras', {
                controller: 'ObraController',
                controllerAs: 'vm',
                templateUrl: 'TimeLine/index.html'
            })
            .when('/logout', {
                controller: 'LogoutController',
                controllerAs: 'vm',
                templateUrl: 'Login/login.html'
            })
            .when('/TimeLine', {
                controller: 'ProductCreateCtrl',
                controllerAs: 'vm',
                templateUrl: 'TimeLine/index.html'
            });


    });
})();