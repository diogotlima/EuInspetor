/**
 * Created by diogo on 01/12/15.
 */
(function () {
    'use strict';
    angular.module('mwa').factory('LoginFactory', LoginFactory);

    LoginFactory.$inject = ['$http', 'SETTINGS'];

    function LoginFactory($http, SETTINGS) {
        return {
            login: login
        };

        function login(data) {
            var dt = "grant_type=password&username=" + data.email + "&password=" + data.password;
            var url = SETTINGS.SERVICE_URL + 'api/security/token';
            var header = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

            return $http.post(url, dt, header);
        }


    }

})();