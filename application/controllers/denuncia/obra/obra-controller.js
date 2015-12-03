/**
 * Created by andrefillype on 02/12/15.
 */

(function () {
    'use strict';
    angular.module('mwa').controller('ObraController', ObraController);

    ObraController.$inject = ['$location', '$rootScope', 'APP_SETTINGS'];

    function ObraController($location, $rootScope, APP_SETTINGS) {
        var obras;
        getDenunciasObras();


        function getDenunciasObras() {

            var connection = new Firebase(APP_SETTINGS.FIREBASE_URL);
            //alert(connection.child("users"));
            obras = getListDenunciasObras();

            $rootScope.obras = obras;

            function getListDenunciasObras() {
                var DenunciaTexto;
                var DatabaseResults;

                connection.child("users").on("value", function(snapshot) {
                    DatabaseResults = snapshot.val();
                    DenunciaTexto = DatabaseResults;
                }, function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                });
                console.log(DenunciaTexto);
                return DenunciaTexto;
            }
        }
    };
})();