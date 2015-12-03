(function() {
    'use strict';
    angular.module('mwa').controller('LoginController', LoginController);

<<<<<<< HEAD
    LoginController.$inject = ['$scope', '$rootScope', '$firebaseAuth','$location', 'APP_SETTINGS'];

    function LoginController($scope, $rootScope, $firebaseAuth , $location, APP_SETTINGS) {
        var vm = this;
        var ref = new Firebase(APP_SETTINGS.FIREBASE_URL);

    vm.login =  {
    email: '',
    password: ''}

        vm.autenticacao = Login;
        vm.logout = logout;
        vm.navigate = navigate;
=======
    LoginController.$inject = ['$scope', '$rootScope', '$firebaseSimpleLogin'];


>>>>>>> origin/master


<<<<<<< HEAD
        function activate() {
        }

        function Login() {
            ref.authWithPassword(vm.login, function(error, authData) {
                if (error) {
                    console.log("Falha no login!!", error);
                    alert(vm.login);
                }else{
                    $rootScope.user = {
                        email: vm.login.email
                    };
                    $location.path('/');
                    $scope.$apply();
                    alert(email);
                }
            }, {
                scope: "email"
            });
        }
=======
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
>>>>>>> origin/master

                })
        }

<<<<<<< HEAD
        function navigate(path) {
            $location.path(path + '/');
        }
    }
})();
=======
    };
})();
>>>>>>> origin/master
