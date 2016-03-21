myApp.controller('TokenController', ['$scope', 'gettokenservice', function($scope, gettokenservice) {
    $scope.token = null;
    
    // If the catalogservice is successful in getting data display it
    gettokenservice.success(function(dataResponse) {
        $scope.token = dataResponse;
    });
    // If the catalogservice is failed then return error message
    gettokenservice.error(function(dataResponse) {
        $scope.token = "fail";
    });
}]);

