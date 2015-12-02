/**
 * Created by andrefillype on 02/12/15.
 */

(function () {
    'use strict';
    angular.module('mwa').controller('ObraController', ObraController);

    ObraController.$inject = ['$location', '$rootScope', 'SETTINGS', 'ObraFactory'];

    function ObraController($location, $rootScope, SETTINGS, ObraFactory) {
        function getDenunciasObras() {
            var obras;

            obras: ObraFactory.getDenunciasObras()
                        .success(success)
                        .catch(fail);

            function success(response) {
                $rootScope.obras = obras;
                $location.path('/');
            }

            function fail(error) {
                toastr.error(error.data.error_description, 'Falha na obtenção de denúncias relacionadas à obras.');
            }
        }

        function setRespostaDenunciasObras() {
            var resposta = $('RespostaTCE').val();
            var id = $('Id').val();

            ObraFactory.setRespostaDenunciasObras(resposta, id)
                .success(success)
                .catch(fail);

            function success(response) {
                $location.path('/');
            }

            function fail(error) {
                toastr.error(error.data.error_description, 'Falha no momento de inserir a resposta.');
            }
        }
    };
})();