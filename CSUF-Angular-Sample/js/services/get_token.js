// I use factory I think its the same as service though
myApp.factory('gettokenservice', ['$http',function($http) {
        delete $http.defaults.headers.common['X-Requested-With'];
        var req = {
            method: 'POST',
            url: 'https://bc026551-76ad-49c9-a2b5-664e5cc6e1c0.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token',
            headers: {'Authorization': 'Basic YWRtaW46PG15YWRtaW5zZWNyZXQ=',
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'x-tenant': 'bc026551-76ad-49c9-a2b5-664e5cc6e1c0'
                     },
            data: 'client_id=admin&grant_type=client_credentials&client_secret=myadminsecret'
            }
        return $http(req);
    }
]
);
