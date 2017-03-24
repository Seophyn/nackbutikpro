angular.module("cart").
    controller("cartController", ["$scope", "$location", "cartService",
    function ($scope, $location, cartService) {


        $scope.addToCart = function (product) {
            cartService.addToCart(product);
            console.log(cartService.returnCart())
        };

        $scope.cart = cartService.returnCart();
    }]);