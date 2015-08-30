
angular.module('gitAroundApp.controllers', ['gitAroundApp.services', 'google-maps'])

.controller('MainCtrl', ['$scope', function($scope) {
	console.log("Controller is working like a BOSS")
}])


.controller('ItinsCtrl', ['$scope', 'ItinService', function($scope, ItinService) {
   console.log('itins controller working')
   $scope.itins = ItinService.all()

   // $scope.itin = Itin.get({id: 1})


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
}])




.controller('ItinshowCtrl', ['$scope', '$routeParams', 'ItinService', function($scope, $routeParams, ItinService) {
   var itin_id = $routeParams.id;
   console.log("Id: "+itin_id)
	console.log("Show Controller is working like a BOSS")
   
 //    ItinService.get({id:itin_id}, function(response){
 //   $scope.items = response.items
 //    console.log($scope.items)
 // });

     
   $scope.itin = ItinService.get(itin_id)
    console.log($scope.itin)
 

    
}])

;






