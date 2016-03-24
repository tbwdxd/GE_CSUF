myApp.controller('TokenController', ['$http','$scope', 'gettokenservice', 'catalogservice' ,function($http,$scope, gettokenservice, catalogservice) {
    $scope.token = null;
    
    // If the catalogservice is successful in getting data display it
    gettokenservice.success(function(dataResponse) {
        $scope.token = dataResponse;
        //catalogservice
        $scope.catalogData = null;
        catalogservice.query($scope.token).success(function(dataResponse) {
       		$scope.catalogData = dataResponse;
        //console.log($scope.token);
    	});
    // If the catalogservice is failed then return error message
    	catalogservice.query($scope.token).error(function(errorResponse) {
        	$scope.catalogData = errorResponse;
    	});
    });
    // If the catalogservice is failed then return error message
    gettokenservice.error(function(dataResponse) {
        $scope.token = dataResponse;
    });
    

    // If the catalogservice is successful in getting data display it
    
}]);

