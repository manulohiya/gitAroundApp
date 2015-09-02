
angular.module('gitAroundApp.controllers', ['gitAroundApp.services', 'uiGmapgoogle-maps', 'ui.bootstrap'])

.controller('MainCtrl', ['$scope', function($scope) {
	console.log("Controller is working like a BOSS")
}])

.controller('ItinsCtrl', ['$scope', 'ItinService', '$location', '$modal', '$log', function($scope, ItinService, $location, $modal, $log) {
  console.log('itins controller working')
  $scope.itins = ItinService.all()


  $scope.submit = function() {
  $scope.itin.date_created = new Date();
  $scope.itin.id = $scope.itins.length;
  $scope.itins.push($scope.itin); 
  $('#myModal').modal('hide');   
  $scope.itin = ''
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
  
  $scope.map = { 
                 center: { location: $scope.itin.city }, 
                 zoom: 12
               }

  console.log("Map Center: "+$scope.map.center.latitude);
  console.log("Map Center: "+$scope.map.center.longitude);
  

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
          
        }
        else {
           console.log("phuck uuuuu " + status);
        };
     });
  };
  
  $scope.markers =[];
  var marker = {}
  angular.forEach($scope.items, function(val, key) {
    console.log(val)
    codeAddress(val.location, val.id, function(latLng, markerId) { 
      marker = {
        itemid: key,
        coords: {   
          latitude: latLng.G,
          longitude: latLng.K
        }
      }

      $scope.markers.push(marker)
       console.log($scope.markers) 
    })
  })


}


]);













