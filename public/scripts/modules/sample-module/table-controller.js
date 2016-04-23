define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('TableCtrl', ['$scope', '$http', function($scope, $http) {
        	$http.get('../sample-data/avg.json')
        	.then(function(res) {
            $scope.avgData = res.data;
        });
        	

   
    }]);
});
