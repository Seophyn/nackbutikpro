angular.module("cart").
    controller("cartController", ["$scope", "$rootScope", "$location", "cartService",
    function ($scope, $rootScope, $location, cartService) {

        $scope.totalSum = cartService.totalSumCalc();

        $scope.checkout = function () {
            $scope.orderText = "";
            cartService.checkout($rootScope.internalcustomerId).then(function success() {
                if(cartService.returnCart().length == 0){
                    $scope.orderText = "You do not have any products in your cart, therefor order cannot process."
                }
                else {
                    $scope.orderText = "Order received! Thank you for your purchase.";
                    cartService.emptyCart();
                    $scope.totalSum = 0;
                }

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
            $scope.totalSum = 0;
        };
    }]);