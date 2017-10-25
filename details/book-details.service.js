(function() {

    'use strict';

    angular.module('bookDetails').factory('bookDetailsService', bookDetailsService);

    bookDetailsService.$inject = ['$resource', 'config'];

    function bookDetailsService($resource, config) {
        return {
            load: load
        };

        function load(id) {
            var bookDetailsResource = $resource(config.baseUrl + '/' + id);
            return bookDetailsResource.get().$promise;
        }
    }

}());