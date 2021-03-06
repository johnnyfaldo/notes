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
                }
            },

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
                $window.location = '/login';
                return false;
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



