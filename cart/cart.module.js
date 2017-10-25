(function() {
    'use strict';

    angular.module('cart', ['ngResource', 'ngRoute', 'bookStorage'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/cart', {
                templateUrl: 'cart/cart.tmpl.html',
                controller: 'CartController',
                controllerAs: 'vm',
                resolve: {
                    savedBooks: resolveSavedBooks
                }
            });
        }]);

    resolveSavedBooks.$inject = ['storageService', 'config'];

    function resolveSavedBooks(storageService, config) {
        return JSON.parse(storageService.getState(config.savedBooksKey));
    }
}());