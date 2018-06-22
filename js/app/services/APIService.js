(function() {

    "use strict";

    let APIService = function (
        $http,
        $q,
        appConfig,
        StorageService
    ) {

        this.domain = appConfig.domain;

        this.client_id = appConfig.client_id;
        this.client_secret = appConfig.client_secret;

        this.call = (verb, url, data, headers) => {

            if(StorageService.get('token')) {
                headers = this.injectToken(headers);
            }

            return $q((resolve, reject) => {

                $http({
                    method: verb,
                    url: this.domain+url,
                    data: data,
                    headers:headers
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

        this.injectToken = (headers) => {

            if(!headers) {
                headers = {};
            }

            headers.Authorization = StorageService.get('token');

            return headers;

        }

    };

    angular.module(app).service('APIService', [
        '$http',
        '$q',
        'appConfig',
        'StorageService',
        APIService
    ]);

}());