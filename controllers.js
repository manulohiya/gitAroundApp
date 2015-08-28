
angular.module('gitAroundApp.controllers', ['gitAroundApp.services', 'ui.bootstrap'])

.controller('MainCtrl', ['$scope', function($scope) {
	console.log("Controller is working like a BOSS")
}])


.controller('ItinsCtrl', ['$scope', 'ItinService', function($scope, ItinService) {
   console.log('itins controller working')
   $scope.itins = ItinService.all()

   // $scope.itin = Itin.get({id: 1})


   // // add a new itinerary
   $scope.newItin = {};

   // Itin.save($scope.newItin, function(data) {
   //   console.log(data);
   // });

   // // // delete a itin
   // Itin.delete({id: ''});

   // update a book
 //   var book = Book.get({ id: 513 }, function() {
 //   book.title = "EDITING A BOOK YAY";
 //   Book.update({id: 513}, book)
	// });
}])




.controller('ItinshowCtrl', ['$scope', 'ItinService', function($scope, ItinService) {

	console.log("Show Controller is working like a BOSS")
    $scope.item = ItinService.get(0).items
   
    console.log($scope.item)
    
}])









