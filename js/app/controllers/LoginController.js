(function() {

    "use strict";

    let LoginController = function(
        $scope,
        $state,
        AuthService
    ) {

        $scope.error = false;
        $scope.processing = false;

        $scope.model = {
            username:null,
            password:null
        };

        $scope.login = (isValid) => {

            if(!isValid) {
                return;
            }

            $scope.processing = true;

            AuthService.login({
                email:$scope.model.username,
                password:$scope.model.password
            }).then(() => {

                $scope.processing = false;
                $state.go('overview');

            }, (reason) => {

                $scope.error = reason;
                $scope.processing = false;

            });

        };

    };

    angular.module(app).controller('LoginController', [
        '$scope',
        '$state',
        'AuthService',
        LoginController
    ])

}());