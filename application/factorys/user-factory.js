/**
 * Created by diogo on 01/12/15.
 */
(function () {
    'use strict';
    angular.module('mwa').factory('LoginFactory', LoginFactory);

    LoginFactory.$inject = ['$http','$firebaseAuth', 'SETTINGS'];

    function LoginFactory($http,$firebaseAuth, SETTINGS) {
        return {
            login: login
        };


        function login(data) {

            var url = new $http.Firebase(SETTINGS.SERVICE_URL);
            var fbAuth = $firebaseAuth(url);
            return fbAuth.$authWithPassword({ email:data.email ,password: data.password});

        }

    }
})();

appGeral.controller("LoginController", function($scope, $firebaseAuth, $location) {

    $scope.login = function(username, password) {
        var fbAuth = $firebaseAuth(fb);
        fbAuth.$authWithPassword({
            email: username,
            password: password
        }).then(function(authData) {
            $scope.modalLogin.hide();
            $location.path("/app/denuncias");

        }).catch(function(error) {
            console.error("ERROR: " + error);
            alert("Tente novamente " + error);
        });
    }


    $scope.register = function(username, password) {
        var fbAuth = $firebaseAuth(fb);
        fbAuth.$createUser({email: username, password: password}).then(function() {
            return fbAuth.$authWithPassword({
                email: username,
                password: password
            });
        }).then(function(authData) {
            $scope.modalCadastro.hide();
            $scope.modalLogin.hide();
            alert("Seu cadastro foi efetuado com sucesso!");
            $location.path("/app/denuncias");
        }).catch(function(error) {
            console.error("ERROR " + error);
            alert("Ocorreu o seguinte " + error);
        });
    }

});