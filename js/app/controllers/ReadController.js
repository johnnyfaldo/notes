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

        $scope.model = {
            title:null,
            content:null,
            parent:noteId
        };

        $scope.error = false;

        $scope.loading = !($stateParams.note);

        $scope.additionalNotes = [];

        let setAdditionalNotes = (note, children) => {

            $scope.additionalNotes = (children) ? children : [];
            $scope.additionalNotes.push(note);

        };

        if(!$stateParams.note) {

            NoteService.show(noteId).then((note) => {

                $scope.loading = false;
                $scope.note = note;
                setAdditionalNotes(note, note.children);

            }, (error) => {

                $scope.loading = false;
                $scope.error = error;

            });

        }else {

            setAdditionalNotes($scope.note, $scope.note.children);

        }

    };

    angular.module(app).controller('ReadController', [
       '$state',
       '$scope',
       '$stateParams',
       'NoteService',
        ReadController
    ]);

}());
