(function() {

    'use strict';

    angular.module('bookStorage').factory('storageService', storageService);

    storageService.$inject = ['$window'];

    function storageService($window) {
        return {
            getState: getState,
            setState: setState
        };

        function getState(key) {
            return $window.localStorage.getItem(key);
        }

        function setState(key, value) {
            $window.localStorage.setItem(key, value);
        }
    }

}());