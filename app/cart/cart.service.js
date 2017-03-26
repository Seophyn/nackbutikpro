angular.module("cart")
    .factory("cartService", ["$http", function ($http) {
        var shopCart = [];
        return {
            addToCart: function (product) {
                var found = false;
                if (shopCart.length == 0) {
                    product.quantity = 1;
                    shopCart.push(product);
                }
                else {
                    for (var i = 0; i < shopCart.length; i++) {
                        if (shopCart[i].id == product.id) {
                            shopCart[i].quantity += 1;
                            found = true;
                            break;
                        }
                        }
                    if (!found){
                        product.quantity = 1;
                        shopCart.push(product);
                    }
                }


            },
            returnCart: function () {
                return shopCart;
            },
            checkout: function () {
                var products = [];

                for (var i = 0; i < shopCart.length; i++){
                    var productObject = {};
                    productObject.productId = shopCart[i].id;
                    productObject.quantity = shopCart[i].quantity;
                    products.push(productObject);
                    console.log(products);
                }

            },
            totalSumCalc: function () {
                var totalSum = 0;
                for (var i = 0; i < shopCart.length; i++){
                    totalSum += shopCart[i].quantity * shopCart[i].price;
                }
                return totalSum;
            },
            emptyCart: function () {
                console.log(shopCart);
                shopCart = [];
                console.log(shopCart);
            }
        }
    }]);