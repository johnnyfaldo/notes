(function() {

    "use strict";

    let RoutesConfig = ($stateProvider, $urlRouterProvider) => {

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

        $urlRouterProvider.otherwise('/login');

    };

    angular.module(app).config([
        '$stateProvider',
        '$urlRouterProvider',
        RoutesConfig
    ]);

}());