(function() {

    "use strict";

    let notesController = function(
        $timeout,
        $scope
    ) {

        this.notes = [];

        this.load = (notes) => {

            this.notes = notes;

        };

        this.$onChange = () => {

            this.load(this.note.children);

        };

    };

    let notes = {
        templateUrl:'/views/components/notes.html',
        controller: [
            '$timeout',
            '$scope',
            notesController
       ],
       bindings: {
          note:'<',
       }
    };

    angular.module(app).component('notes', notes);

}());