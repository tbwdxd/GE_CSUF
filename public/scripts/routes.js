/**
 * Router Config
 * This is the router definition that defines all application routes.
 */
define(['angular', 'angular-ui-router'], function(angular) {
    'use strict';
    return angular.module('app.routes', ['ui.router']).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

        //Turn on or off HTML5 mode which uses the # hash
        $locationProvider.html5Mode(true).hashPrefix('!');

        /**
         * Router paths
         * This is where the name of the route is matched to the controller and view template.
         */
        $stateProvider
        .state('secure', {
                template: '<ui-view/>',
                abstract: true,
                resolve: {
                    authenticated: ['$q', 'PredixUserService', function ($q, predixUserService) {
                        var deferred = $q.defer();
                        predixUserService.isAuthenticated().then(function(userInfo){
                            deferred.resolve(userInfo);
                        }, function(){
                            deferred.reject({code: 'UNAUTHORIZED'});
                        });
                        return deferred.promise;
                    }]
                }
            })
    		.state('home', {
            	url: '/home',
            	templateUrl: 'views/home.html',
            	controller: 'HomeCtrl'
            })           
            .state('dashboards', {
            	parent: 'secure',
                url: '/dashboards',
                templateUrl: 'views/dashboards.html',
                controller: 'DashboardsCtrl'
            })
		    .state('real-time', {
            	parent: 'secure',
                url: '/real-time',
                templateUrl: 'views/real-time.html',
                controller: 'DashboardsCtrl'
            })
		    .state('total', {
            	parent: 'secure',
                url: '/total',
                templateUrl: 'views/total.html',
                controller: 'TableCtrl'
            })
           .state('trigen', {
            	parent: 'secure',
                url: '/trigen',
                templateUrl: 'views/trigen.html',
                controller: 'TrigenCtrl'
            })
	    	.state('documentation', {
            	url: '/documentation',
            	templateUrl: 'views/documentation.html',
            	controller: 'HomeCtrl'
            });



        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            document.querySelector('px-app-nav').markSelected('/home');
            $state.go('home');
        });
		

    }]);
});
