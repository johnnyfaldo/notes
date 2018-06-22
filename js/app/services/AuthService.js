(function() {

    "use strict";

    let AuthService = function(
        $q,
        APIService,
        StorageService
    ) {

        this.login = (data) => {

            return $q((resolve, reject) => {

                let config = {
                    grant_type:'password',
                    username:data.email,
                    password:data.password,
                    client_id:APIService.client_id,
                    client_secret:APIService.client_secret
                };

                APIService.call('POST', 'oauth/token', config).then((response) => {

                    StorageService.set('token', 'Bearer '+response.data.access_token);

                    resolve(response);

                }, (response) => {

                    reject(response.data.message);

                });

            });

        };

        this.isAuthenticated = () => {

            //TODO check expiry etc
            return (null !== StorageService.get('token'));

        };

    };

    angular.module(app).service('AuthService', [
        '$q',
        'APIService',
        'StorageService',
        AuthService
    ]);

}());