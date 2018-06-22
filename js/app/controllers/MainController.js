(function() {

    "use strict";

    var MainController = function(
        $rootScope,
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
       '$rootScope',
       '$scope',
       '$state',
       'AuthService',
       MainController
    ]);

}());