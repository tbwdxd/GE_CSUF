// By placing ['$scope', 'catalogservice', function($scope, catalogservice)
// Within the function header it allows the controller to acess the 
// catalogservice from analytics-catalog.js in this file
// It also allows the $scope to be used within all files as well
myApp.controller('MainController', ['$scope', 'catalogservice', function($scope, catalogservice) {
    $scope.catalogData = null;
    
    // If the catalogservice is successful in getting data display it
    catalogservice.success(function(dataResponse) {
        $scope.catalogData = dataResponse;
    });
}]);