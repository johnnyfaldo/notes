(function() {

    "use strict";

    var MainController = function(
        $scope,
        $state,
        AuthService
    ) {

        $scope.logout = () => {

            AuthService.logout();
            $state.go('login');

        };

    };

    angular.module(app).controller('MainController', [
       '$scope',
       '$state',
       'AuthService',
       MainController
    ]);

}());