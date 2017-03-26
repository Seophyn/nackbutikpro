
angular.module("login").
    controller("loginController", ["$scope","$rootScope", "$location", "loginService",
    function ($scope, $rootScope, $location, loginService) {

        $scope.logOut = function () {
            console.log($rootScope.isLoggedIn);
            $rootScope.isLoggedIn = false;
            console.log($rootScope.isLoggedIn);

            $location.path("/");

        };

        $scope.doLogin = function (username, password) {
            console.log($rootScope.isLoggedIn);
            loginService.userLogIn(username, password).then(function (response) {
                $rootScope.isLoggedIn = true;
                $rootScope.internalcustomerId = response.data.customerId;
                console.log($rootScope.internalcustomerId);
                $location.path("/");
                console.log($rootScope.isLoggedIn)
                
            })
        };

        $scope.customer = {};
        $scope.testande = "test";

        $scope.createCustomer = function() {
            var newCustomer = {

                firstName: $scope.customer.firstName,
                surName: $scope.customer.surName,
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
