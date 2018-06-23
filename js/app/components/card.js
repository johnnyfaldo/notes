(function() {

    "use strict";

    let cardController = function(
        $timeout,
        $scope
    ) {

    };

    let card = {
        templateUrl:'/views/components/card.html',
        controller: [
            '$timeout',
            '$scope',
            cardController
       ],
       bindings: {
          card:'<',
       }
    };

    angular.module(app).component('card', card);

}());