define(['angular', './sample-module'], function (ngular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('TableCtrl', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    		
    		$scope.price = 0.135;
    		//$scope.solarData = null;
    		
    		// Get the monthly data
        	$http.get('../sample-data/avg.json')
        	.then(function(res) {
            $scope.avgData = res.data;
	    console.log($scope.avgData);
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
    	
    	/*
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
 
*/
    		var week=100;
		var week2=99;
		$scope.solarData = [];
		$scope.tempData = [];
		//var query = '{"start":"'+week+'w-ago","tags":[{"name":"SolarData"}]}';
		//var query = '{"cache_time":0,"tags":[{"name":"Trigen-Data","order":"desc"}],"start":'+week+'w-ago,"end":'+week2+'w-ago}';
		var fetchinterval;
		$scope.fetch=function(){
			$scope.solarData = [];
			--week;
			console.log("week_one", week);
			--week2;
			console.log("week_one", week2);
			var query = '{"cache_time":0,"tags":[{"name":"Trigen-Data","order":"asc"}],"start":'+week+'w-ago,"end":'+week2+'w-ago}';
       			$http({
           		url: '/api/v1/datapoints',
          		 method: 'POST',    
           		data: query
         		}).then(function(predixTimeSeriesData){
				 $scope.tempData = $scope.tempData.concat(predixTimeSeriesData.data.tags[0].results[0].values.map(
       			 	function(curVal, index, arr) {
            				return [curVal[0], curVal[1]];
        			}
    				));
			});
			console.log(query);
			$scope.solarData = $scope.tempData;
			console.log($scope.solarData);
		};
		//console.log($scope.solarData);
		$scope.start = function() {
        		fetchinterval = $interval($scope.fetch, 5000);
    		};
		// Clear the interval when the scope/controller is 'destroyed'
    		$scope.$on('$destroy', function() {
       			$interval.cancel(fetchinterval);
    		});
    		// kick off initial start
    		//$scope.start();
/*
	$scope.newSeries = function(week1, week2)
	{
		//$scope.solarData = [];
		//var query = '{"start":"'+week+'w-ago","tags":[{"name":"SolarData"}]}';
		var query = '{"cache_time":0,"tags":[{"name":"SolarData","order":"desc"}],"start":'+week1+'w-ago,"end":'+week2+'w-ago}';
		console.log(query);
       			$http({
           		url: '/api/v1/datapoints',
          		method: 'POST',    
           		data: query
         		}).then(function(predixTimeSeriesData){
				 $scope.solarData = predixTimeSeriesData.data.tags[0].results[0].values.map(
       			 	function(curVal, index, arr) {
            				return [curVal[0], curVal[1]];
        			});
			});
		console.log($scope.solarData);
		return $scope.solarData;
	};
	*/
    	
    }]);
});

