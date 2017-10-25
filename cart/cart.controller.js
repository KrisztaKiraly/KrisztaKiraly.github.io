(function() {

    'use strict';

    angular.module('cart').controller('CartController', CartController);

    CartController.$inject = ['savedBooks', 'bookDetailsService'];

    function CartController(savedBooks, bookDetailsService) {
        var vm = this;
        vm.savedBookDetails = [];

        activate();

        function activate() {
            for(var i in savedBooks) {
                bookDetailsService.load(savedBooks[i]).then(function(result){
                    vm.savedBookDetails.push(result);
                });
            }
        }
    }
}());