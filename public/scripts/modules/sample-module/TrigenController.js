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
	        			$scope.month = "Optimal Time for Maintenance in: " + Month;
	        		}
        	
        	
        		});
        		
        		$scope.daysBlocks = [];
        		$scope.monday = [];
        		$scope.tuesday = [];
    			$scope.wednesday = [];
    			$scope.thursday = [];
    			$scope.friday = [];
    			$scope.saturday = [];
    			$scope.sunday = [];
    			var createString = function(beststarts, bestends) {

        					var tempBlock = [];
        					var len = beststarts.length;
        					if (bestends.length == 0 && beststarts.length == 0) {
        						tempBlock.push("No optimized time");
        					}
        					else if (bestends.length == len) {
        						 for (var i = 0; i < len; i++){
        						 	tempBlock.push(beststarts[i].concat(' - ', bestends[i]));
        						 	}
        					}
        					else if (bestends.length == 0) {
        						tempBlock.push(beststarts[0].concat(' -  End of day'));	
        					}
        					else if (bestends.length == len - 1) {
        						tempBlock.push(beststarts[0].concat(' - ', bestends[0]));
        						tempBlock.push(beststarts[1].concat('- End of day'));	
        					}
        					
        					return tempBlock;
    			}
    			
    			var stuff = $scope.monthsData.days;
        		angular.forEach($scope.monthsData.days, function(value, index) {
        				console.log(value);
    				  if (value.name == "Monday") {

        					$scope.monday = createString(value.bestStarts, value.bestEnds);
        					
        				}
        				else if (value.name == "Tuesday") {
        					$scope.tuesday = createString(value.bestStarts, value.bestEnds);
        				}
        				else if (value.name == "Wednesday") {
        					$scope.wednesday = createString(value.bestStarts, value.bestEnds);
        				}
        				else if (value.name == "Thursday") {
        					$scope.thursday = createString(value.bestStarts, value.bestEnds);
        				}
        				else if (value.name == "Friday") {
        					$scope.friday = createString(value.bestStarts, value.bestEnds);
        				}
        				else if (value.name == "Saturday") {
        					$scope.saturday = createString(value.bestStarts, value.bestEnds);
        				}
        				else if (value.name == "Sunday") {
        					$scope.sunday = createString(value.bestStarts, value.bestEnds);
        				}

        		});
        	
        		
        	
        	};
    	
    	}]);
    	
    	
    });
