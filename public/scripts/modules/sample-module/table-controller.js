define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('TableCtrl', ['$scope', '$http', function($scope, $http) {
    		
    		$scope.price = 0.12;
    		
    		// Get the monthly data
        	$http.get('../sample-data/avg.json')
        	.then(function(res) {
            $scope.avgData = res.data;
        });
        
        // Get the Trigen DownTime
         $http.get('../sample-data/trigenDownTime.json')
        	.then(function(res) {
            $scope.downTime = res.data;
        });
        	

   
    }]);
});
