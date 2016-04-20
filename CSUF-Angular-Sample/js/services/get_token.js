// I use factory I think its the same as service though
// Somehow Predix blocked request of token from browser. We will switch to python function
myApp.factory('gettokenservice', ['$http',function($http) {
        var req = {
                  url: "https://bc026551-76ad-49c9-a2b5-664e5cc6e1c0.predix-uaa.run.aws-usw02-pr.ice.predix.io/oauth/token",
                  method: "POST",
                  headers: {
                          'x-tenant': 'bc026551-76ad-49c9-a2b5-664e5cc6e1c0',
                          'content-type': 'application/x-www-form-urlencoded',
                          'authorization': 'Basic YWRtaW46PG15YWRtaW5zZWNyZXQ=',
                          'cache-control': 'no-cache'
                  },
                  data: 'client_id=admin&grant_type=client_credentials&client_secret=myadminsecret',
            }
        return $http(req);
    }
]
);
