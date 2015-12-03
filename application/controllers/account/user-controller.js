/**
 * Created by diogo on 01/12/15.
 */
(function() {
    'use strict';
    angular.module('mwa').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$rootScope', '$firebaseSimpleLogin'];




    function LoginController($scope, $rootScope, $firebaseSimpleLogin) {
        var firebaseObj = new Firebase('https://euinspetor.firebaseio.com');
        var loginObj = $firebaseSimpleLogin(firebaseObj);

        $scope.user = {};
        $scope.SignIn = function(e){
            e.preventDefault();
            var username = $scope.user.email;
            var password = $scope.user.password;
            loginObj.$login('password', {
                    email: username,
                    password: password
                })
                .then(function(user) {
                    //Success callback
                    console.log('Authentication successful');
                }, function(error) {
                    //Failure callback
                    console.log('Authentication failure');

                })
        }

    };
})();