(function() {
    'use strict';
    angular.module('mwa').controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$rootScope', '$firebaseAuth','$location', 'APP_SETTINGS'];

    function LoginController($scope, $rootScope, $firebaseAuth , $location, APP_SETTINGS) {
        var vm = this;
        var ref = new Firebase(APP_SETTINGS.FIREBASE_URL);

    vm.login =  {
    email: 'contato@andycastro.com.br',
    password: '123'}

        vm.autenticacao = Login;
        vm.logout = logout;
        vm.navigate = navigate;

        activate();
''
        function activate() {
        }

        function Login() {

            ref.authWithPassword(vm.login, function(error, authData) {
                if (error) {
                    console.log("Falha no login!!", error);

                }else{
                    $rootScope.user = {
                        email: vm.login.email
                    };
                    $location.path('/indicadores');
                    $scope.$apply();

                }
            }, {
                scope: "email"
            });
        }

        function logout() {
            ref.unauth();
            $rootScope.user = null;
            localStorage.removeItem("firebase:session::5517");
            $location.path('/login');
        }

        function navigate(path) {
            $location.path(path + '/');
        }
    }
})();
