(function() {

    "use strict";

    let OverviewController = function(
        $state,
        $scope,
        $stateParams,
        StorageService,
        NoteService
    ) {

        $scope.notes = [];

        $scope.loading = true;

        NoteService.index().then((notes) => {

            $scope.loading = false;
            $scope.notes = notes;

        }, (error) => {

            $scope.loading = false;

            alert('Error loading notes: '+error);

        });

    };

    angular.module(app).controller('OverviewController', [
       '$state',
       '$scope',
       '$stateParams',
       'StorageService',
       'NoteService',
       OverviewController
    ]);

}());
