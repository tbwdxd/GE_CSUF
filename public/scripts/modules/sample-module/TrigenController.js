define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';
    
    controllers.controller('TrigenCtrl', ['$scope', '$http', function($scope, $http) {
    	
    		$scope.price = 0.135;
    		$scope.monthsData = null;
    	
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
	        		}
        	
        	
        		});
        	
        		
        	
        	};
    	
    	}]);
    	
    	
    });