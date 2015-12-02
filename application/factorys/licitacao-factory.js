/**
 * Created by andrefillype on 02/12/15.
 */

(function () {
    'use strict';
    angular.module('mwa').factory('LicitacaoFactory', LicitacaoFactory);

    LicitacaoFactory.$inject = ['$http', 'SETTINGS'];

    function LicitacaoFactory($http, SETTINGS) {

        var connection = new FireBase(SETTINGS.url);

        return {
            licitacoes: getDenunciasLicitacoes
        };

        function getDenunciasLicitacoes() {
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