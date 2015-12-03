/**
 * Created by andrefillype on 02/12/15.
 */

(function () {
    'use strict';
    angular.module('mwa').controller('ObraController', ObraController);

    ObraController.$inject = ['$location', '$rootScope', 'SETTINGS'];

    function ObraController($location, $rootScope, SETTINGS) {
        var obras;
        getDenunciasObras();


        function getDenunciasObras() {

            var connection = new Firebase(SETTINGS.SERVICE_URL);
            //alert(connection.child("users"));
            obras = getListDenunciasObras();

            function getListDenunciasObras() {
                var DenunciaTexto;
                var DatabaseResults;

                connection.child("users").on("value", function(snapshot) {
                    DatabaseResults = snapshot.val();
                    DenunciaTexto = DatabaseResults.DenunciaTexto;
                }, function (errorObject) {
                    console.log("The read failed: " + errorObject.code);
                });

                return DenunciaTexto;
            }
        }
    };
})();