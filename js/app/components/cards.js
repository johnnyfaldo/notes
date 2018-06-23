(function() {

    "use strict";

    let cardsController = function(
        $timeout,
        $scope
    ) {

        let vm = this;

        this.notes = [];

        this.$onInit = () => {

            //notes children
            let notes = this.note.children;

            //set note being read as the first entry
            let note = {
                content:this.note.content,
                user:this.note.user,
                created_at:this.note.created_at
            };

            notes.push(note);

            this.notes = notes;

        };

    };

    let cards = {
        templateUrl:'/views/components/cards.html',
        controller: [
            '$timeout',
            '$scope',
            cardsController
       ],
       bindings: {
          note:'<',
       }
    };

    angular.module(app).component('cards', cards);

}());