(function() {

    'use strict';

    angular.module('bookSearch').factory('bookSearchService', bookSearchService);

    bookSearchService.$inject = ['$resource', 'config'];

    function bookSearchService($resource, config) {
        return {
            searchByTitle: searchByTitle
        };

        function searchByTitle(data) {
            var url  = config.baseUrl + '?q=intitle%3A' + data;
            var bookSearchResource = $resource(url);
            return bookSearchResource.get().$promise;
        }
    }

}());