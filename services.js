angular.module('gitAroundApp.services', [])

.service('ItinService', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var itins = [{
    id: 0,
    title: 'SF - Ferry - Tiburon',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: 1,
    city: 'San Francisco',
    items: [{}],
    author: 'Katie'
  }, {
    id: 1,
    title: 'SF - Ferry - Tiburon',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: 1,
    city: 'San Francisco',
    items: [{}],
    author: 'Manu'
  }, {
    id: 2,
    title: 'SF - Ferry - Tiburon',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: 1,
    city: 'San Francisco',
    items: [{}],
    author: 'George'
  }, {
    id: 3,
    title: 'SF - Ferry - Tiburon',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: 1,
    city: 'San Francisco',
    items: [{}],
    author: 'Jack'
  }, {
    id: 4,
    title: 'SF - Ferry - Tiburon',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: 1,
    city: 'San Francisco',
    items: [{}],
    author: 'Jill'
  }, {
    id: 5,
    title: 'SF - Ferry - Tiburon',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: 1,
    city: 'San Francisco',
    items: [{}],
    author: 'Tommy'
  }, {
    id: 6,
    title: 'SF - Ferry - Tiburon',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: 1,
    city: 'San Francisco',
    items: [{}],
    author: 'Haley'
  }];
  return {
    all: function() {
      console.log('services works')
      return itins;
    },
    remove: function(itin) {
      itins.splice(itins.indexOf(itin), 1);
    },
    get: function(itinId) {
      for (var i = 0; i < itins.length; i++) {
        if (itins[i].id === parseInt(itinId)) {
          return itins[i];
        }
      }
      return null;
    },
    post: function(itin){
    itins.push(itin);
    }
  };
});