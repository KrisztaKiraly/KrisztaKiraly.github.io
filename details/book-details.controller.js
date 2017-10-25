(function() {

    'use strict';

    angular.module('bookDetails').controller('BookDetailsController', BookDetailsController);

    BookDetailsController.$inject = ['cartService', 'book'];

    function BookDetailsController(cartService, book) {
        var vm = this;

        vm.book = book.volumeInfo;
        vm.addToCart = addToCart;
        vm.removeFromCart = removeFromCart;

        activate();

        function activate() {
            if(vm.book.authors){
                vm.authors = vm.book.authors.join(', ');
            }

            if(cartService.isInCart(book.id)){
                vm.isInCart = true;
            }
        }
        
        function addToCart() {
            cartService.addToCart(book.id);
            vm.isInCart = true;
        }

        function removeFromCart() {
            cartService.removeFromCart(book.id);
            vm.isInCart = false;
        }
    }
}());