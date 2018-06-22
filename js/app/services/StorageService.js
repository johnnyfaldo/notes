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

    };

    angular.module(app).service('StorageService', [
        StorageService
    ]);

}());
