(function() {

    "use strict";

    let StorageService = function() {

        this.set = function(key, value) {

            window.localStorage.setItem(key, JSON.stringify(value));

        };

        this.get = function(key) {

            try {

                return JSON.parse(window.localStorage.getItem(key));

            } catch (e) {

                return null;

            }

        }

        this.delete = function(key) {
            window.localStorage.removeItem(key);
        };


    };

    angular.module(app).service('StorageService', [
        StorageService
    ]);

}());
