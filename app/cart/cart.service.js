angular.module("cart")
    .factory("cartService", [function () {
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
            }
        }
    }]);