(function() {

    "use strict";

    let RoutesConfig = ($stateProvider) => {

        $stateProvider.state('login', {
            url: '/login',
            parent:'main',
            templateUrl: 'views/pages/login.html',
            controller:'LoginController'
        });

        $stateProvider.state('logout', {
            url: '/logout',
            controller: 'LogoutController'
        });

    };

    angular.module(app).config([
        '$stateProvider',
        RoutesConfig
    ]);

}());