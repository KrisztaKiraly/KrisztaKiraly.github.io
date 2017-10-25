(function() {
    'use strict';

    angular.module('bookSearch', ['ngResource', 'ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'search/book-search.tmpl.html',
                controller: 'BookSearchController',
                controllerAs: 'vm'
            });
        }]);
}());