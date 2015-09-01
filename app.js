

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

.controller('Ctrl3', function($scope) {
  $scope.roles = [
    {id: 1, text: 'guest'},
    {id: 2, text: 'user'},
    {id: 3, text: 'customer'},
    {id: 4, text: 'admin'}
  ];
  $scope.user = {
    roles: [$scope.roles[1]]
  };
  $scope.checkAll = function() {
    $scope.user.roles = angular.copy($scope.roles);
  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles = [];
    $scope.user.roles.push($scope.roles[0]);
  };
  $scope.setToNull = function() {
    $scope.user.roles = null;
  };

});

