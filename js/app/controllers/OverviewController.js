(function() {

    "use strict";

    let OverviewController = function(
        $state,
        $scope,
        NoteService,
        yopaDateFilter
    ) {

        console.log('Overview Controller');

        $scope.notes = [];

        $scope.loading = true;

        NoteService.index().then((notes) => {

            $scope.loading = false;
            $scope.notes = notes;

        }, (error) => {

            console.log('error: ', error);

        });

    };

    angular.module(app).controller('OverviewController', [
       '$state',
       '$scope',
       'NoteService',
       'yopaDateFilter',
       OverviewController
    ]);

}());
