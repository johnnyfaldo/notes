(function() {

    "use strict";

    var HomeController = function(
        $state,
        $scope
    ) {

        console.log('Home Controller');

        /*
        LoginService.login({
            email:'joe@bloggs.com',
            password:'secret'
        }).then((response) => {

            console.log(StorageService.get('token'));

        });
        */

    };

    angular.module(app).controller('HomeController', [
       '$state',
       '$scope',
       HomeController
    ]);

}());
