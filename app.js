angular.module('gitAroundApp', ['ngRoute', 'gitAroundApp.controllers'])

.config(['$routeProvider',
   function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'ItinsCtrl'
            })
            .when('/itin', {
                templateUrl: 'templates/itinshow.html',
                controller: 'ItinshowCtrl'
            })
         
            .otherwise({
                redirectTo: '/'
            });
}])







;