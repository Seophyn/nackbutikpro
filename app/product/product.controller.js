    angular.module("product").
        controller("productController", ["$scope","productService", "categoryService",
    function ($scope, productService, categoryService) {
        productService.getProducts().then(function (response) {
            var products = response.data;
            $scope.products = products;
        });
        categoryService.getCategories().then(function (response) {
            var categories = response.data;
            $scope.categories = categories;
        });
        $scope.searchTerm = "";

    }

]);
