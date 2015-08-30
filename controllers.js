
angular.module('gitAroundApp.controllers', ['gitAroundApp.services', 'ui.bootstrap'])

.controller('MainCtrl', ['$scope', function($scope) {
	console.log("Controller is working like a BOSS")
}])


.controller('ItinsCtrl', ['$scope', 'ItinService', function($scope, ItinService) {
   console.log('itins controller working')
   $scope.itins = ItinService.all()


  $scope.submit = function() {
  $scope.itin.date_created = new Date();
  $scope.itin.id = $scope.itins.length;
  $scope.itins.push($scope.itin); 
  console.log($scope.itin)
  $scope.itin = ''
  console.log($scope.itins)
  }

}])

.controller('ItinshowCtrl', ['$scope', 'ItinService', function($scope, ItinService) {
	console.log("Show Controller is working like a BOSS")

    $scope.item = ItinService.get(0).items
    console.log($scope.item)
    
}])










