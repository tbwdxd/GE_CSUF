myApp.controller('MainController', ['$scope', 'catalogservice', function($scope, catalogservice) {
    $scope.catalogData = null;
    catalogservice.success(function(dataResponse) {
        $scope.catalogData = dataResponse;
    });
}]);