angular.module("app").
    controller("appController", ["$scope",
    function ($scope) {

        $scope.logOut = function () {
            console.log($rootScope.isLoggedIn);
            $rootScope.isLoggedIn = false;
            console.log($rootScope.isLoggedIn);

            $scope.path("/");

        }
}]);

angular.module("app").
    run(function ($rootScope) {
    $rootScope.isLoggedIn = false;
});