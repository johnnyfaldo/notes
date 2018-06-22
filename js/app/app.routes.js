(function () {

    'use strict';

    let RoutesConfig = ($stateProvider, $locationProvider) => {

        $locationProvider.html5Mode(true);

        $stateProvider.state('main', {
            abstract:true,
            views: {
                '':{
                    templateUrl:'views/layout.html',
                    controller:'MainController',
                },
                'header@main':{
                    templateUrl:'views/partial/header.html'
                }
            },

        });

        $stateProvider.state('home', {
            url:'/',
            parent:'main',
            templateUrl: 'views/pages/login.html',
            controller: 'HomeController'
        });

    };

    angular.module(app).config([
        '$stateProvider',
        '$locationProvider',
        RoutesConfig
    ]);

    let Run = ($rootScope, $state, $window, $transitions, AuthService) => {

        $transitions.onStart({}, (transition) => {

            if(
                transition.to().name !== 'login'
                && !AuthService.isAuthenticated()
            ) {
                //$state.go('login');
            }

        });

    };

    angular.module(app).run([
        '$rootScope',
        '$state',
        '$window',
        '$transitions',
        'AuthService',
        Run
    ]);

}());



