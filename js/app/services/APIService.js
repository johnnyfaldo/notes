(function() {

    "use strict";

    let APIService = function (
        $http,
        $q,
        appConfig
    ) {

        this.domain = appConfig.domain;

        this.client_id = appConfig.client_id;
        this.client_secret = appConfig.client_secret;

        this.call = (verb, url, data) => {

            return $q((resolve, reject) => {

                $http({
                    method: verb,
                    url: this.domain+url,
                    data: data
                }).then((response) => {

                    if(response.status !== 200) {

                        reject(response);

                    }

                    resolve(response);

                }, (response) => {

                    reject(response);

                });

            });

        };

    };

    angular.module(app).service('APIService', [
        '$http',
        '$q',
        'appConfig',
        APIService
    ]);

}());