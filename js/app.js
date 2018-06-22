
let app = 'yopa';

(function () {

    'use strict';

    angular.module(app, ['ui.router']).constant('appConfig', {
        domain:'http://localhost/',
        client_id:2,
        client_secret:'SxdODYmzYA8jXHAN9N8nJFHk24vTHRaSDc2W596P'
    });

}());
