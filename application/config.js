/**
 * Created by diogo on 01/12/15.
 */

(function () {
    'use strict';

    angular.module('mwa').constant('SETTINGS', {
        'VERSION': '0.0.1',
        'CURR_ENV': 'dev',
        'AUTH_USER': 'mwa-user',
        'SERVICE_URL': 'https://euinspetor.firebaseio.com/users'
    });


    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if ($rootScope.user == null) {
            $location.path('/login');
        }
    });
})();
