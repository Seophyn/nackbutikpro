
angular.module("login").
    controller("loginController", ["$scope","$rootScope", "$location", "loginService",
    function ($scope, $rootScope, $location, loginService) {

        $scope.doLogin = function (username, password) {
            console.log($rootScope.isLoggedIn);
            loginService.userLogIn(username, password).then(function () {
                $rootScope.isLoggedIn = true;
                $location.path("/");
                console.log($rootScope.isLoggedIn)
                
            })
        };

        $scope.customer = {};
        $scope.testande = "test";

        $scope.createCustomer = function() {
            var newCustomer = {

                firstName: $scope.customer.firstName,
                lastName: $scope.customer.lastName,
                email: $scope.customer.email,
                password: $scope.customer.password,
                phone: $scope.customer.phone,
                address: $scope.customer.address,
                postalCode: $scope.customer.postalCode,
                city: $scope.customer.city


            };

            loginService.createLogin(newCustomer).then(function () {

                $location.path("/login");

            });
        }

    }]);
