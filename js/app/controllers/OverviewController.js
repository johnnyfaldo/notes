(function() {

    "use strict";

    let OverviewController = function(
        $state,
        $scope
    ) {

        console.log('Overview Controller');

    };

    angular.module(app).controller('OverviewController', [
       '$state',
       '$scope',
       OverviewController
    ]);

}());
