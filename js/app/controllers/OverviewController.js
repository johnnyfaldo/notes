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

        let useCache = ($stateParams.useCache);

        if(!useCache) {

            NoteService.index().then((notes) => {

                $scope.loading = false;
                $scope.notes = notes;

                StorageService.set('notes', notes);

            }, (error) => {

                $scope.loading = false;

                alert('Error loading notes: '+error);

            });

        }else {

            $scope.loading = false;
            $scope.notes = StorageService.get('notes');

        }

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
