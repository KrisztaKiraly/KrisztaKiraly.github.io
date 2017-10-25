(function() {
    'use strict';

    angular.module('bookshop', [
        'ngResource', 
        'ngRoute', 
        'ngSanitize', 
        'bookDetails', 
        'bookSearch', 
        'cart', 
        'error'
    ]).config(['$locationProvider', '$compileProvider', '$httpProvider', function($locationProvider, $compileProvider, $httpProvider) {
            $locationProvider.hashPrefix('');
            $httpProvider.interceptors.push(['$q', '$location', function ($q, $location) {
                return {
                    'responseError': function(response) {
                        if(response.status === 404 || 503) {
                            $location.path('/error');
                        }
                        return $q.reject(response);
                    }
                };
            }]);
        }])
        .value('config', {
            'baseUrl': 'https://www.googleapis.com/books/v1/volumes',
            'savedBooksKey': 'saved'
        })
        .controller('BookshopController', function() {});
}());