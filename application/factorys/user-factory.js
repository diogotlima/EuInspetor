/**
 * Created by diogo on 01/12/15.
 */
(function () {
    'use strict';
    angular.module('mwa').factory('LoginFactory', LoginFactory);

    LoginFactory.$inject = ['$firebaseAuth', 'SETTINGS'];

    function LoginFactory($firebaseAuth, SETTINGS) {
        return {
            login: login
        };


        function login(data) {

            var url = SETTINGS.SERVICE_URL ;
            var fbAuth = $firebaseAuth(url);
            return fbAuth.$authWithPassword({ email:data.email ,password: data.password});


        }



    }

})();
