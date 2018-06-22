(function() {

    "use strict";

    let RoutesConfig = ($stateProvider) => {

        $stateProvider.state('overview', {
            url: '/overview',
            parent:'main',
            params: {useCache:false},
            templateUrl: 'views/pages/overview.html',
            controller:'OverviewController'
        });

        $stateProvider.state('create', {
            url: '/create',
            parent:'main',
            templateUrl: 'views/pages/create.html',
            controller:'CreateController'
        });

        $stateProvider.state('read', {
            url: '/read/:noteId',
            parent:'main',
            params: {noteId:null, note:null},
            templateUrl: 'views/pages/read.html',
            controller:'ReadController'
        });

    };

    angular.module(app).config([
        '$stateProvider',
        RoutesConfig
    ]);

}());