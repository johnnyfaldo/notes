(function() {

    "use strict";

    let CreateController = function(
        $state,
        $scope
    ) {

        console.log('Create Controller');

    };

    angular.module(app).controller('CreateController', [
       '$state',
       '$scope',
        CreateController
    ]);

}());
