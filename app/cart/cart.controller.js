angular.module("cart").
    controller("cartController", ["$scope", "$rootScope", "$location", "cartService",
    function ($scope, $rootScope, $location, cartService) {

        $scope.totalSum = cartService.totalSumCalc();

        $scope.checkout = function () {
            $scope.orderText = "";
            cartService.checkout($rootScope.internalcustomerId).then(function success() {
                $scope.orderText = "Order received! Thank you for your purchase."

            }, function error() {
                $scope.orderText = "Something went wrong while trying to process your order. Please try again in a few minutes."
                }
            )
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