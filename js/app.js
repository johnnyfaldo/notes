
let app = 'yopa';

(function () {

    'use strict';

    angular.module(app, ['ui.router']).constant('appConfig', {
        domain:'http://notes-api.johnfaldo.com/',
        client_id:2,
        client_secret:'AUd4B0abj1xyJMvzZXTRyI4Gtkw1RAtYDUNH1vqa'
    });

}());
