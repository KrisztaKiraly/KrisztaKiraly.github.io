(function() {

    'use strict';

    angular.module('cart').factory('cartService', cartService);

    cartService.$inject = ['storageService', 'config'];

    function cartService(storageService, config) {
        return {
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            isInCart: isInCart
        };

        function addToCart(id) {
            var books = getBooksInCart();
            if(books.indexOf(id) === -1) {
                books.push(id);
            }
            storageService.setState(config.savedBooksKey, JSON.stringify(books));
        }

        function removeFromCart(id) {
            var books = getBooksInCart();
            var index = books.indexOf(id);
            if (index > -1) {
                books.splice(index, 1);
            }
            storageService.setState(config.savedBooksKey, JSON.stringify(books));
        }

        function isInCart(id) {
            var books = getBooksInCart();
            return books.indexOf(id) !== -1;
        }

        function getBooksInCart() {
            return JSON.parse(storageService.getState(config.savedBooksKey)) || [];
        }
    }
}());