(function() {

    'use strict';

    angular.module('bookSearch').controller('BookSearchController', BookSearchController);

    BookSearchController.$inject = ['bookSearchService'];

    function BookSearchController(bookSearchService) {
        var vm = this;

        vm.search = search;
        vm.onChange = onChange;
        vm.isSearchDisabled = true;

        function search() {
            bookSearchService.searchByTitle(vm.searchTerm).then(function(result){
                if(result.totalItems > 0){
                    vm.books = result.items;
                } else {
                    vm.books = [];
                }
            });
        }

        function onChange() {
            vm.isSearchDisabled = vm.searchTerm.length === 0;
        }
    }

}());