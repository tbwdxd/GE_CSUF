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
   		
        $http({
            method: 'GET',
            url: '../sample-data/completeData.json'//change this url to new json file location
        }).
        success(function(data, status, headers, config) {
            $scope.tsData = data;
        }).error(function(data, status, headers, config) {});
        
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
  
         $http({
            method: 'POST',
            url: '/api/v1/datapoints',
            withCredentials: true,
            data: '{"start":"1y-ago","tags":[{"name":"Compressor-2015:CompressionRatio","groups":[{"name":"quality"}]}]}'
        }).then(function(predixTimeSeriesData, status){
           $scope.testData = predixTimeSeriesData;
         });
        
        

        /*PredixAssetService.getAssetsByParentId('root').then(function (initialContext) {

            //pre-select the 1st asset
            initialContext.data[0].selectedAsset = true;
            $scope.initialContexts = initialContext;
            $scope.initialContextName = initialContext.data[0].name;

            //load view selector
            $scope.openContext($scope.initialContexts.data[0]);
        }, function (message) {
            $log.error(message);
        });

        $scope.decks = [];
        $scope.selectedDeckUrl = null;

        // callback for when the Open button is clicked
        $scope.openContext = function (contextDetails) {

            // need to clean up the context details so it doesn't have the infinite parent/children cycle,
            // which causes problems later (can't interpolate: {{context}} TypeError: Converting circular structure to JSON)
            var newContext = angular.copy(contextDetails);
            newContext.children = [];
            newContext.parent = [];

            // url end point can change from context to context
            // so the same card can display different data from different contexts

            var url = {
                'parent': {
                    'datagrid-data': '/sample-data/datagrid-data.json'
                },
                'child': {
                    'core-vibe-rear-cruise': '/sample-data/core-vibe-rear-cruise.json',
                    'delta-egt-cruise': '/sample-data/delta-egt-cruise.json'
                },
                'child2': {
                    'core-vibe-rear-cruise': '/sample-data/core-vibe-rear-cruise0.json',
                    'delta-egt-cruise': '/sample-data/delta-egt-cruise.json'
                },
                'child3': {
                    'core-vibe-rear-cruise': '/sample-data/core-vibe-rear-cruise1.json',
                    'delta-egt-cruise': '/sample-data/delta-egt-cruise.json'
                }
            };

            newContext.urls = url[newContext.id];

            $scope.context = newContext;

            //Tag string can be classification from contextDetails
            PredixViewService.getDecksByTags(newContext.classification) // gets all decks for this context
                .then(function (decks) {
                    $scope.decks = [];

                    if (decks && decks.length > 0) {
                        decks.forEach(function (deck) {
                            $scope.decks.push({name: deck.title, id: deck.id});
                        });
                    }
                });
        };

        $scope.viewServiceBaseUrl = PredixViewService.baseUrl;

        $scope.getChildren = function (parent, options) {
            return PredixAssetService.getAssetsByParentId(parent.id, options);
        };

        $scope.handlers = {
            itemOpenHandler: $scope.openContext,
            getChildren: $scope.getChildren
            // (optional) click handler: itemClickHandler: $scope.clickHandler
        };*/
    }]);
});
