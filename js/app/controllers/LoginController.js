(function() {

    "use strict";

    var LoginController = function(
        $scope,
        $state,
        $timeout
    ) {

        console.log('Login Controller');

        $scope.model = {
            username:null,
            password:null
        };

    };

    angular.module(app).controller('LoginController', [
        '$scope',
        '$state',
        '$timeout',
        LoginController
    ])

}());