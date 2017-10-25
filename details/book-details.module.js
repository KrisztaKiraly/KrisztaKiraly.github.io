(function() {
    'use strict';

    angular.module('bookDetails', ['ngResource', 'ngRoute', 'ngSanitize', 'bookStorage'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/details/:id', {
                templateUrl: 'details/book-details.tmpl.html',
                controller: 'BookDetailsController',
                controllerAs: 'vm',
                resolve: {
                    book: resolveBookDetails
                }
            });
        }]);

    resolveBookDetails.$inject = ['$route', 'bookDetailsService'];

    function resolveBookDetails($route, bookDetailsService) {
        return bookDetailsService.load($route.current.params.id);
    }
}());