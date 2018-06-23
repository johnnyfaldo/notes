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
                        data[i].created_at = this.dateStringToObject(data[i].created_at);
                    }

                    resolve(response.data.data);

                }, (response) => {

                    reject(response.data.message);

                });

            });

        };

        this.create = (model) => {

            return $q((resolve, reject) => {

                APIService.call('POST', 'api/notes', model).then((response) => {

                    resolve(response.data.data);

                }, (response) => {

                    reject(response.data.message);

                });

            });

        };

        this.show = (noteId) => {

            return $q((resolve, reject) => {

                APIService.call('GET', 'api/notes/'+noteId).then((response) => {

                    resolve(response.data.data);

                }, (response) => {

                    reject(response.data.message);

                });

            });

        };

        this.dateStringToObject = (dateString) => {

            return new Date(dateString.replace(/-/g,"/"));

        };

    };

    angular.module(app).service('NoteService', [
        '$q',
        'APIService',
        NoteService
    ]);

}());