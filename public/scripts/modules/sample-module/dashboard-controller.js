define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('DashboardsCtrl', ['$scope', '$log', '$http', 'PredixAssetService', 'PredixViewService', function($scope, $log, $http, PredixAssetService, PredixViewService) {
        	$scope.tsData = null;
        	
        	// Chart Values
        	$scope.solarData = null;
   		$scope.trigenData = null;
   		$scope.sceData = null;
   		
   		// Total Consumption
   		$scope.solarTotal = null;
   		$scope.sceTotal = null;
   		$scope.trigenTotal = null;
   		$scope.allTotal = null;
   		
   		// Average Values
   		$scope.solarAverage = null;
   		$scope.sceAverage = null;
   		$scope.trigenAverage = null;
   		$scope.allAverage = null;
   		
   		// Cost Values
   		$scope.solarCost = null;
   		$scope.sceCost = null;
   		$scope.trigenCost = null;
   		$scope.allCost = null;
   		
   		// Percentage 
   		$scope.solarPercent = null;
   		$scope.scePercent = null;
   		$scope.trigenPercent = null;
 
   		
   		// Price per kilowatt hour the trigen plant runs on nautral gas
   		$scope.priceSCE = 0.135
   		$scope.priceNaturalGas = 0.08

	//get default solar
	$http({
           url: '/api/v1/datapoints',
           method: 'POST',    
           data: '{"cache_time":0,"tags":[{"name":"SolarData","order":"desc"}],"start":1396944000000,"end":1397289600000}'
           }).then(function(predixTimeSeriesData){
		$scope.solarData = predixTimeSeriesData.data.tags[0].results[0].values.map(
       		function(curVal, index, arr) {
            		return [curVal[0], curVal[1]];
        	});
	});
	//get default Trigen
	$http({
           url: '/api/v1/datapoints',
           method: 'POST',    
           data: '{"cache_time":0,"tags":[{"name":"Trigen-Data","order":"desc"}],"start":1396944000000,"end":1397289600000}'
           }).then(function(predixTimeSeriesData){
		$scope.trigenData = predixTimeSeriesData.data.tags[0].results[0].values.map(
       		function(curVal, index, arr) {
            		return [curVal[0], curVal[1]];
        	});
	});

	//get default SCE
	$http({
           url: '/api/v1/datapoints',
           method: 'POST',    
           data: '{"cache_time":0,"tags":[{"name":"SCE-Data","order":"desc"}],"start":1396944000000,"end":1397289600000}'
           }).then(function(predixTimeSeriesData){
		$scope.sceData = predixTimeSeriesData.data.tags[0].results[0].values.map(
       		function(curVal, index, arr) {
            		return [curVal[0], curVal[1]];
        	});
	});

	$http({
            method: 'GET',
            url: '../sample-data/completeData.json'//change this url to new json file location
        }).
        success(function(data, status, headers, config) {
            $scope.tsData = data;
        }).error(function(data, status, headers, config) {});
        

   	/*
        $http({
            method: 'GET',
            url: '../sample-data/completeData.json'//change this url to new json file location
        }).
        success(function(data, status, headers, config) {
            $scope.tsData = data;
        var temp_SCE = [];
		var temp_Solar = [];		
		var temp_trigen = [];
		angular.forEach($scope.tsData, function(value,index){
			var sce = [];
			var solar = [];
			var trigen = [];
			try{
				var timestamp = parseInt(value.Timestamp) * 1000;
				sce.push(timestamp, parseFloat(value.SCE));
				solar.push(timestamp, parseFloat(value.Solar));
        		trigen.push(timestamp, parseFloat(value.Trigen) * -1);

	
				temp_trigen.push(trigen);
        		temp_SCE.push(sce);
        		temp_Solar.push(solar);
			}
			catch(err){
				console.log("error");
			}
	     });
	$scope.solarData = angular.toJson(temp_Solar);
   	$scope.trigenData = angular.toJson(temp_trigen);
   	$scope.sceData = angular.toJson(temp_SCE);	
        }).error(function(data, status, headers, config) {});
        */
        // This will update the values when the date range has been changed
        $scope.update = function(fromTime, toTime) {
        	var tempsce = [];
        	var tempsolar = [];
        	var temptrigen = [];
        	var counter = 0.0;
        	var totalsce = 0.0;
        	var totaltrigen = 0.0;
         var totalsolar = 0.0;
        	
        	  angular.forEach($scope.tsData, function(value, index){
        	  			var sce = [];
        	  			var solar = [];
        	  			var trigen = [];

        	  			var currTime = parseInt(value.Timestamp) * 1000
        	  			if (currTime >= fromTime && currTime <= toTime) {
        	  					try {
        	  						// This is for the chart
        	  						sce.push(currTime, parseFloat(value.SCE));
        	  						solar.push(currTime, parseFloat(value.Solar));
        	  						trigen.push(currTime, parseFloat(value.Trigen) * -1);
									temptrigen.push(trigen);
        	  						tempsce.push(sce);
        	  						tempsolar.push(solar);
        	  						
        	  						// Calculate the averages and total cost
        	  						totalsce += parseFloat(value.SCE);
									totaltrigen += (parseFloat(value.Trigen) * -1);
									totalsolar += parseFloat(value.Solar);
									counter += 1
        	  						}
        	  						catch(err) {
        	  								console.log("Error at index", index);
        	  							}
        	  			}
   			});

   			
   			// Place all calculated values into $scope variables
   			$scope.solarData = angular.toJson(tempsolar);
   			$scope.trigenData = angular.toJson(temptrigen);
   			$scope.sceData = angular.toJson(tempsce);
   			
   			$scope.solarTotal = totalsolar;
   			$scope.sceTotal = totalsce;
   			$scope.trigenTotal = totaltrigen;
   			$scope.allTotal = totalsolar + totalsce + totaltrigen;
   			
   			$scope.solarCost = totalsolar * 0;
   			$scope.sceCost = totalsce * $scope.priceSCE;
   			$scope.trigenCost = totaltrigen * $scope.priceNaturalGas;
   			$scope.allCost = $scope.solarCost + $scope.sceCost + $scope.trigenCost;
   			
   			$scope.solarAverage = totalsolar / counter;
   			$scope.sceAverage = totalsce / counter;
   			$scope.trigenAverage = totaltrigen / counter;
   			$scope.allAverage = (totalsolar + totalsce + totaltrigen) / counter;
   			var totals = (totalsolar + totalsce + totaltrigen);
   			
   			$scope.solarPercent = (totalsolar / totals) * 100 ;
   			$scope.scePercent = (totalsce / totals) * 100;
   			$scope.trigenPercent = (totaltrigen / totals) * 100;
        	
        	};
        	 console.log($scope.solarData);
  
        
    }]);
});
