/**
 * Created by andrefillype on 02/12/15.
 */

(function () {
    'use strict';
    angular.module('mwa').controller('LicitacaoController', LicitacaoController);

    LicitacaoController.$inject = ['$location', '$rootScope', 'SETTINGS', 'LicitacaoFactory'];

    function LicitacaoController($location, $rootScope, SETTINGS, LicitacaoFactory) {
        function getDenunciasLicitacao() {
            var licitacoes;

            licitacoes: LicitacaoFactory.getDenunciasLicitacao()
                .success(success)
                .catch(fail);

            function success(response) {
                $rootScope.licitacoes = licitacoes;
                $location.path('/');
            }

            function fail(error) {
                toastr.error(error.data.error_description, 'Falha na obtenção de denúncias relacionadas à licitações.');
            }
        }
    };
})();