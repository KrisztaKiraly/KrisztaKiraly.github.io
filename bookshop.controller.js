(function() {

    'use strict';

    angular.module('bookshop').controller('BookshopController', BookshopController);

    BookshopController.$inject = ['$scope', '$location'];

    function BookshopController($scope, $location) {
        $scope.isActive = function(path) {
            return $location.path() == path;
        }
    }

}());