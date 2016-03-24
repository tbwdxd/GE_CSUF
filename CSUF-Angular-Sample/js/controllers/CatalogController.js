// By placing ['$scope', 'catalogservice', function($scope, catalogservice)
// Within the function header it allows the controller to acess the 
// catalogservice from analytics-catalog.js in this file
// It also allows the $scope to be used within all files as well
myApp.controller('CatalogController', ['$scope', 'catalogservice', function($scope, catalogservice) {
    $scope.catalogData = null;
    	//console.log($scope.token);
 	console.log(20);
    // If the catalogservice is successful in getting data display it
    catalogservice.success(function(dataResponse) {
        $scope.catalogData = dataResponse;
        console.log($scope.token);
    });
    // If the catalogservice is failed then return error message
    catalogservice.error(function(errorResponse) {
        $scope.catalogData = errorResponse;
    });
}]);

