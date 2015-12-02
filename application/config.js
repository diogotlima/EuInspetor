/**
 * Created by diogo on 01/12/15.
 */
(function () {
    angular.module('mwa').constant('APP_SETTINGS', {
        "FIREBASE_URL": "https://euinspetor.firebaseio.com"
    });

    angular.module('mwa').run(function ($rootScope, $location) {
        $rootScope.user = null;

        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.user == null) {
                $location.path("/login");
            }
        });
    });
})();
