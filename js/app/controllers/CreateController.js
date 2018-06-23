(function() {

    "use strict";

    let CreateController = function(
        $state,
        $scope,
        NoteService
    ) {

        console.log('Create Controller');

        $scope.model = {
          title:null,
          content:null
        };

        $scope.error = false;
        $scope.processing = false;

        $scope.submit = (isValid) => {

            if(!isValid) {
                return;
            }

            $scope.processing = true;

            NoteService.create($scope.model).then((note) => {

                $state.go('read', {noteId:note.id, note:note});

            }, (error) => {

                $scope.error = error;
                $scope.processing = false;

            });

        };

    };

    angular.module(app).controller('CreateController', [
       '$state',
       '$scope',
        'NoteService',
        CreateController
    ]);

}());
