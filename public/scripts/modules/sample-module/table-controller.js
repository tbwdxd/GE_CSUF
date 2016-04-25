define(['angular', './sample-module'], function (ngular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('TableCtrl', ['$scope', '$http', function($scope, $http) {
    		
    		$scope.price = 0.12;
    		$scope.solarData = null;
    		
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
        	
        	/*
        	$http.get('../sample-data/testData.json')
        	.then(function(predixTimeSeriesData) {
			   $scope.solarData = predixTimeSeriesData.data.tags[0].results[0].values.map(
       		 function(curVal, index, arr) {
            	return [curVal[0], curVal[1]];
        		}
    			);

    			conosle.log($scope.solarData);
    	});
    	*/
    	
    	
        $http({
           url: '/api/v1/datapoints',
           method: 'POST',    
           data: '{"start":"1y-ago","tags":[{"name":"SolarData"}]}'
         }).then(function(predixTimeSeriesData){
				 $scope.solarData = predixTimeSeriesData.data.tags[0].results[0].values.map(
       		 function(curVal, index, arr) {
            	return [curVal[0], curVal[1]];
        		}
    			);
		console.log($scope.solarData);
    	});
    	
    }]);
});
