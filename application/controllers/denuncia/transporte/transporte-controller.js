/**
 * Created by andrefillype on 02/12/15.
 */

(function () {
    'use strict';
    angular.module('mwa').controller('TransporteController', TransporteController);

    TransporteController.$inject = ['$location', '$rootScope', 'SETTINGS', 'TransporteFactory'];

    function TransporteController($location, $rootScope, SETTINGS, TransporteFactory) {
        function getDenunciasTransportes() {
            var transportes;

            transportes: TransporteFactory.getDenunciasTransportes()
                .success(success)
                .catch(fail);

            function success(response) {
                $rootScope.transportes = transportes;
                $location.path('/');
            }

            function fail(error) {
                toastr.error(error.data.error_description, 'Falha na obtenção de denúncias relacionadas ao transporte público.');
            }
        }
    };
})();