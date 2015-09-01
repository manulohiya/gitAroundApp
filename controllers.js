

angular.module('gitAroundApp.controllers', ['gitAroundApp.services', 'uiGmapgoogle-maps', 'ui.bootstrap'])


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
  // console.log($scope.itin)
  $scope.itin = ''
  // console.log($scope.itins)
  }

}])





.controller('ItinshowCtrl', ['$scope', '$routeParams', 'ItinService', function($scope, $routeParams, ItinService) {
      
     

      var itin_id = $routeParams.id;
      // console.log("Id: "+itin_id)
      // console.log("Show Controller is working like a BOSS")

      $scope.itin = ItinService.get(itin_id)
      // console.log($scope.itin)
      $scope.items = $scope.itin.items
      console.log("ID:" + $scope.items[0].id)
      // console.log("Number of items:"+$scope.items.length)
      $scope.render = false
      
      
      

      var codeAddress = function(address, id, onSuccess) {
         // console.log('address is:'+ address);
         geocoder = new google.maps.Geocoder();
         // console.log("Requesting geocode...");
         geocoder.geocode({'address': address}, function(results, status) {
            // console.log("Received geocode with status" + status);
            if (status == google.maps.GeocoderStatus.OK) {
               var latLng = results[0].geometry.location;
               // console.log(latLng)
               onSuccess(latLng, id);
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

       codeAddress($scope.items[0].location, $scope.items[0].id, function(latLng, markerId){ 
       $scope.map = 
       {
       center: 
         { latitude: latLng.G, 
          longitude: latLng.K 
         }, 
         zoom: 12
       }
       console.log($scope.map)
     });
      
       

      // var address = 'Stow Lake Boathouse, Stow Lake Drive, San Francisco, CA, United States';
      var i = 0;
      var markerId = $scope.items[i].id;
      console.log("ID " + markerId); 
      $scope.markers =[];

     

      while (i < $scope.items.length) {
        console.log("Item Number " + i);
        codeAddress($scope.items[i].location, $scope.items[i].id, function(latLng, markerId){ 
          console.log("Lat recieved with " + latLng);
          console.log("ID received with" + markerId);        
          $scope.marker = {

          itemid: i,
          coords: {   
          latitude: latLng.G,
          longitude: latLng.K
          }
        }
  
       
        $scope.markers.push($scope.marker)
        console.log($scope.markers) 
        $scope.render=true
      }); 
   console.log("Counter: "+i);     
   i++

   }
  console.log($scope.markers) 

}


]);










