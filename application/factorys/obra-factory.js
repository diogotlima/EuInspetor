/**
 * Created by andrefillype on 02/12/15.
 */

(function () {
    'use strict';
    angular.module('mwa').factory('ObraFactory', ObraFactory);

    ObraFactory.$inject = ['$http', 'SETTINGS'];

    function ObraFactory($http, SETTINGS) {

        var connection = new FireBase(SETTINGS.SERVICE_URL);

        return {
            obras: getDenunciasObras
        };

        function getDenunciasObras() {
            var DenunciaTexto;
            var DatabaseResults;

            this.connection("child_added", function(snapshot) {
                DatabaseResults = snapshot.val();
                DenunciaTexto = DatabaseResults.DenunciaTexto;
            });

            return DenunciaTexto;
        }

        function setRespostaDenunciasObras(resposta, id) {
            var RespostaTexto;
            var connectionUser = connection.child(id);
            RespostaTexto = resposta;

            connectionUser.update({
                "RespostaTexto": RespostaTexto
            });
        }
    }
})();