
angular.module('gitAroundApp.controllers', ['gitAroundApp.services', 'uiGmapgoogle-maps'])

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

      $scope.itin = ItinService.get(itin_id)
      console.log($scope.itin)
      $scope.items = $scope.itin.items
      console.log($scope.items)
      console.log("Number of items:"+$scope.items.length)
      $scope.render = false
      
      
      $scope.map = { center: 
         { latitude: 37.7833, longitude: -122.4167 
         }, 
         zoom: 12
      }

      var codeAddress = function(address, onSuccess) {
         console.log('address is:'+ address);
         geocoder = new google.maps.Geocoder();
         console.log("Requesting geocode...");
         geocoder.geocode({'address': address}, function(results, status) {
            console.log("Received geocode with status" + status);
            if (status == google.maps.GeocoderStatus.OK) {
               var latLng = results[0].geometry.location;
               console.log(latLng)
               onSuccess(latLng);
               //return lat;
               // console.log("map works!")
               //  console.log(results)
               //  console.log(results[0].geometry.location.G)
               //  console.log(results[0].geometry.location.K)
            }
            else {
               console.log("phuck uuuuu " + status);
            };
         });
      };

      // var address = 'Stow Lake Boathouse, Stow Lake Drive, San Francisco, CA, United States';
      var i = 0;
      // while (i < 5) {
      codeAddress($scope.items[i].location,function(latLng){
         console.log("Lat recieved with " + latLng);
            
         // $scope.marker = {
         //    id: $scope.items[i].id,
         //    coords: 
         //    {   
         //       latitude: latLng.G,
         //       longitude: latLng.K
         //    }
         
         // };
          
      
      $scope.markerList = [{

         id: $scope.items[i].id,
         coords: {   
            latitude: latLng.G,
            longitude: latLng.K
         }

      },
      {id: $scope.items[1].id,
       coords: {   
         latitude: 37.7900,longitude: -122.4167
      }

      }]



      // console.log($scope.marker)
      // console.log($scope.markerList)

      $scope.render=true
      }); 

   
   }


    
      
  

]);






