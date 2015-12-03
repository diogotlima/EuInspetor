/**
 * Created by andrefillype on 03/12/15.
 */
(function () {
    'use strict';
    angular.module('mwa').controller('IndicadoresController', IndicadoresController);
    IndicadoresController.$inject = ['$location', '$rootScope', 'APP_SETTINGS'];

    function IndicadoresController($location, $rootScope, APP_SETTINGS) {

        var vm = this;
        activate();


        function activate() {

        }

        var denuncias;
        getDenuncias();


        function getDenuncias() {

            var connection = new Firebase(APP_SETTINGS.FIREBASE_URL);
            denuncias = getListDenuncias();

            $rootScope.denuncias = denuncias;

            function getListDenuncias() {
                var DenunciaTexto;
                var DatabaseResults;

                connection.child("users").on("value", function(snapshot) {
                    DatabaseResults = snapshot.val();
                }, function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                });
                return DatabaseResults;
            }
        }
    };
})();