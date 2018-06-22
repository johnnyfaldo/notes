(function() {

    "use strict";

    let NoteService = function(
        $q,
        APIService
    ) {

        this.index = () => {

            return $q((resolve, reject) => {

                APIService.call('GET', 'api/notes').then((response) => {

                    let data = response.data.data;

                    for(let i in data) {
                        data[i].created_at = new Date(data[i].created_at.replace(/-/g,"/"));
                    }

                    resolve(response.data.data);

                }, (response) => {

                    reject(response.data.message);

                });

            });

        };

    };

    angular.module(app).service('NoteService', [
        '$q',
        'APIService',
        NoteService
    ]);

}());