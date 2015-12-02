/**
 * Created by diogo on 01/12/15.
 */
(function () {
    'use strict';
    angular.module('mwa').controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$rootScope', 'SETTINGS', 'LoginFactory'];

    function LoginController($location, $rootScope, SETTINGS, LoginFactory) {
        var vm = this;
        vm.login = {
            email: '',
            password: ''
        };
        vm.submit = login;

        activate();

        function activate() {

        }
        function login() {
            LoginFactory.login(vm.login)
                .success(success)
                .catch(fail);

            function success(response) {
                $rootScope.user = vm.login.email;
                $location.path('/');
            }

            function fail(error) {
                toastr.error(error.data.error_description, 'Falha na autenticação');
            }
        }
    };
})();