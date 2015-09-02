angular.module('gitAroundApp', ['ngRoute', 'gitAroundApp.controllers', 'gitAroundApp.services','ngMap', 'ui.bootstrap'])

.config(['$routeProvider',
   function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/home.html',
                controller: 'ItinsCtrl'
            })
            .when('/itin/:id', {
                templateUrl: 'templates/itinshow.html',
                controller: 'ItinshowCtrl'
            })         
            .otherwise({
                redirectTo: '/'
            });

}])

