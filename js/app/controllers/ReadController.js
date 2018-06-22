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
            content:null,
            parent:noteId
        };

        $scope.error = false;

        $scope.loading = !($stateParams.note);

        $scope.additionalNotes = [];

        $scope.additionIsActive = false;

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

        $scope.openAdditional = () => {

            $scope.additionIsActive = true;

        };

        $scope.closeAdditional = () => {

            $scope.additionIsActive = false;

        };

        $scope.submit = (isValid) => {

            if(!isValid) {
                return;
            }

            $scope.processing = true;

            $scope.model.title = $scope.note.title;

            NoteService.create($scope.model).then((note) => {

                $scope.model.content = null;
                $scope.additionalNotes.unshift(note);
                $scope.processing = false;

            }, (error) => {

                $scope.error = error;
                $scope.processing = false;

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
