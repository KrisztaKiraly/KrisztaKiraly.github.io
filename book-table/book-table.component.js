(function() {

    'use strict';

    angular.module('bookshop').component('bookTable', {
        templateUrl: 'book-table/book-table.tmpl.html',
        bindings: {
            books: '=',
            messageIfEmpty: '@'
        },
        controller: function() {},
        controllerAs: 'vm'
    });
}());