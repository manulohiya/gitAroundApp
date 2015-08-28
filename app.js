angular.module('gitAroundApp', ['ngRoute', 'gitAroundApp.controllers', 'gitAroundApp.services'])

.config(['$routeProvider',
   function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/home.html',
                controller: 'ItinsCtrl'
            })
         
            .otherwise({
                redirectTo: '/'
            });
}]);