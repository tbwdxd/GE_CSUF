// I use factory I think its the same as service though
myApp.factory('catalogservice', ['$http',
    function($scope, $http) {
        delete $http.defaults.headers.common['X-Requested-With'];
        var token = $scope.token.access_token;
        var req = {
            method: 'GET',
            url: 'https://predix-analytics-catalog-release.run.aws-usw02-pr.ice.predix.io/api/v1/catalog/analytics',
            headers: {'Authorization': 'Bearer ' +token,
                  'Content-Type': 'application/json',
                  'Predix-Zone-Id': 'b5178b7d-e885-4480-bdd9-73d1a66f7f94'
            }
        }
        return $http(req);
    }
]
);
