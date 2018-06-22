(function() {

    "use strict";

    let ReadController = function(
        $state,
        $scope
    ) {

        console.log('Read Controller');

    };

    angular.module(app).controller('ReadController', [
       '$state',
       '$scope',
        ReadController
    ]);

}());
