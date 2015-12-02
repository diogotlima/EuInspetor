/**
 * Created by diogo on 01/12/15.
 */

(function () {
    'use strict';

    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if ($rootScope.user == null) {
            $location.path('/login');
        }
    });
})();
