angular.module("cart").
    controller("cartController", ["$scope", "$location", "cartService",
    function ($scope, $location, cartService) {

        $scope.totalSum = cartService.totalSumCalc();

        $scope.checkout = function () {
            cartService.checkout();
        };


        $scope.addToCart = function (product) {
            cartService.addToCart(product);
            console.log(cartService.returnCart())
        };

        $scope.cart = cartService.returnCart();

        $scope.emptyCart = function () {
            cartService.emptyCart();
        }
    }]);