/**
 * Created by andrefillype on 02/12/15.
 */

(function () {
    'use strict';
    angular.module('mwa').factory('TransporteFactory', TransporteFactory);

    TransporteFactory.$inject = ['$http', 'SETTINGS'];

    function TransporteFactory($http, SETTINGS) {

        var connection = new FireBase(SETTINGS.url);

        return {
            transportes: getDenunciasTransportes
        };

        function getDenunciasTransportes() {
            var DenunciaTexto;
            var DatabaseResults;

            this.connection("child_added", function(snapshot) {
                DatabaseResults = snapshot.val();
                DenunciaTexto = DatabaseResults.DenunciaTexto;
            });

            return DenunciaTexto;
        }


    }
})();