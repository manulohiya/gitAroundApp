

angular.module('gitAroundApp', ['ngRoute', 'gitAroundApp.controllers', 'gitAroundApp.services','uiGmapgoogle-maps', 'ui.bootstrap'])


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


// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
