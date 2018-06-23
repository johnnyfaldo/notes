(function() {

    "use strict";

    let ReadController = function(
        $state,
        $scope,
        $stateParams,
        NoteService
    ) {

        let noteId = $stateParams.noteId;

        $scope.note = $stateParams.note;

        //model for additional note
        $scope.model = {
            content:null,
            parent:noteId
        };

        $scope.error = false;

        $scope.loading = !($stateParams.note);

        //flag to open additional note form
        $scope.additionIsActive = false;

        //optionally pass note as param to save http call/improve performance
        if(!$stateParams.note) {

            NoteService.show(noteId).then((note) => {

                $scope.loading = false;
                $scope.note = note;

            }, (error) => {

                $scope.loading = false;
                $scope.error = error;

            });

        }

        $scope.openAdditional = () => {

            $scope.additionIsActive = true;

        };

        $scope.closeAdditional = () => {

            $scope.additionIsActive = false;

        };

        //submit additional note form
        $scope.submit = (isValid) => {

            if(!isValid) {
                return;
            }

            $scope.processing = true;

            $scope.model.title = $scope.note.title;

            //add the additional note
            NoteService.create($scope.model).then((note) => {

                $scope.model.content = null;

                //children array might be null here
                if(!$scope.note.children) {
                    $scope.note.children = [];
                }

                //add it to cards
                $scope.note.children.unshift(note);

                $scope.processing = false;
                $scope.closeAdditional();

            }, (error) => {

                $scope.error = error;
                $scope.processing = false;
                $scope.closeAdditional();

            });

        };

    };

    angular.module(app).controller('ReadController', [
       '$state',
       '$scope',
       '$stateParams',
       'NoteService',
        ReadController
    ]);

}());
