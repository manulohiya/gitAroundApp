angular.module('gitAroundApp.controllers', ['gitAroundApp.services'])

.controller('MainCtrl', ['$scope', function($scope) {
	console.log("Controller is working like a BOSS")
}])


.controller('ItinsCtrl', ['$scope', 'ItinService', function($scope, ItinService) {
   console.log('itins controller working')
   $scope.itinAll = ItinService.all()

   $scope.itin = Itin.get({id: 1})


   // // add a new book
   $scope.newItin = {};

   // Book.save($scope.newBook, function(data) {
   //   console.log(data);
   // });

   // // // delete a book
   // Book.delete({id: 508});

   // update a book
 //   var book = Book.get({ id: 513 }, function() {
 //   book.title = "EDITING A BOOK YAY";
 //   Book.update({id: 513}, book)
	// });
}]);





