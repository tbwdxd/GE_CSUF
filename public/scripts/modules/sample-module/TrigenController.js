define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';
    
    controllers.controller('TrigenCtrl', ['$scope', '$http', function($scope, $http) {
    	
    		$scope.price = 0.135;
    		$scope.monthsData = null;
    		$scope.dayBlocks = null;
    		$scope.month = null;
    		
    		// Days in the week
    		$scope.monday = null;
    		$scope.tuesday = null;
    		$scope.wednesday = null;
    		$scope.thursday = null;
    		$scope.friday = null;
    		$scope.saturday = null;
    		$scope.sunday = null;
    	
    		// Get the Trigen DownTime
         $http.get('../sample-data/trigenDownTime.json')
        	.then(function(res) {
            $scope.downTime = res.data;
        });
        
         // Get the Trigen Scheduler
         $http.get('../sample-data/trigenSchedule.json')
        	.then(function(res) {
            $scope.trigenSchedule = res.data;
        });
        
        
        $scope.update = function(Month) {
        	
        		angular.forEach($scope.trigenSchedule, function(value, index){
        		
        			if (value.name == Month) {
	        			$scope.monthsData = value;
	        			$scope.month = Month;
	        		}
        	
        	
        		});
        		
        		$scope.daysBlocks = [];
        		angular.forEach($scope.monthsData.days, function(value, index) {
        				var tempBlock = [];
        				if (value.name == "Monday") {
        					console.log("Monday");
        				}
        				else if (value.name = "Tuesday") {
        					console.log("Tuesday");
        				}
        				else if (value.name = "Wednesday") {
        					console.log("Wednesday");
        				}
        				else if (value.name = "Thursday") {
        					console.log("Thursday");
        				}
        				else if (value.name = "Friday") {
        					console.log("Friday");
        				}
        				else if (value.name = "Saturday") {
        					console.log("Saturday");
        				}
        				else if (value.name = "Sunday") {
        					console.log("Sunday");
        				}

        		});
        	
        		
        	
        	};
    	
    	}]);
    	
    	
    });