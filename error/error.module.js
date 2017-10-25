(function() {
    'use strict';

    angular.module('error', ['ngResource', 'ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/error', {
                templateUrl: 'error/error.tmpl.html'
            });
        }]);
}());