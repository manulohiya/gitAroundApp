
angular.module('gitAroundApp.services', ['uiGmapgoogle-maps', 'ui.bootstrap'])


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
    items: [
      {id: 0,
        location: 'Stow Lake Boathouse, Stow Lake Drive, San Francisco, CA, United States',
      name: 'Boating in Stow Lake ',
      desc: 'After having breakfast at tartine, lets head to Golden Gate Park and do some exercise! Stow Lake is one of the biggest lake in the park. Rowboats and paddle boat can be rented at boathouse. If you feel like exploring golden gate park instead, you may also rent a bike at the opposite of rental spot. [INFO] 50 Stow Lake Dr | San Francisco, CA 94118 | (415) 752-0347 | Hours: Mo to Su from 10:00am to 04:00pm. [TIP] Parking is easy, you may either park at parking lot or around the lake. ',
      category: 'Play',
      image: 'http://stowlakeboathouse.com/wp-content/uploads/2014/05/stowe_lake_02.jpg'

      },
      {id: 1,
        location: 'Tartine bakery, Guerrero Street, San Francisco, CA, United States',
      name: 'Start the day with baked goods!',
      desc: 'Lets start a day with bread pudding and fresh grape fruit juice at Tartine Bakery. Its one of the best bakery-cafe in town. They make amazing breads, pastries and open faced melted cheese sandwiches(croques monsieurs). My favorite item is their famous bread pudding, baked with fresh season fresh fruit, must try! They always have a long line on weekends and special holidays. Go early to avoid the line! Tables are limited. If you dont feel like struggling with tables, bring a picnic mat, Mission Dolores Park is just one block away(turn left on 18th st when walking out of the Tartine). [INFO] 600 Guerrero Street | San Francisco, CA 94110-1528 | (415) 487-2600. [TIP] Take bus and get off at 18th & Guerrero St. Parking is limited in the neighbor hood and require excellent parallel parking skill. There are few private parking lot located on 18th heading toward Valencia st. ',
      category: 'Eat',
      image: 'http://www.zomppa.com/wp-content/uploads/2011/04/DSC_0022.jpg'

      },
      {id: 2,
        location: 'Irving St & 9th Ave',
      name: ' Lunch in inner sunset ',
      desc: 'What for lunch? I would suggest go Irving street at the south of park. Irving street and 9th avenue is densely packed with diverse eateries. Few good choice will be Naan n Curry on Irving St. & 8th(Indian), Pluto on Irving & 7th(Sandwich & Salad), Park Chow in 9th Ave between Irving st and Lincoln way. Pacific catch on 9th ave between Irving and Lincoln way. My most recommend place will be San Tung Chinese Restaurant on Irving t between 11th ave and 12 ave. Their shrimp and leek dumplings and dry fried chicken wings are the best I ever had in bay area. [TIP] Parking can be difficult, and you may need to drive a couple of blocks up into the Avenues to find a space. ',
      category: 'Eat',
      image: 'http://1.bp.blogspot.com/_pN2ZiUZWULg/TJcAfcpWQkI/AAAAAAAAAPQ/DEcm1eU9ZHI/s1600/N+Judah+at+9th+%26+Irving.jpg'

      },
      {id: 3,
        location: 'California Academy of Sciences, Music Concourse Drive, San Francisco, CA, United States',
      name: 'Spend the afternoon at the museum',
      desc: 'After lunch, we may head back to the park and go to the world famous Academy of Sciences. Its a place that you can simply spend all day in it. The California Academy of Science is a multifaceted scientific institution committed to leading-edge research, to educational outreach, and to finding new and innovative ways to engage and inspire the public.- quote from their site. In my word, it would be: They have indoor Rain forest, aquarium, and 3D movie planetarium. Its way too cool. [Tip] 1. Make sure u get the movie ticket right when you walk into the museum, Its always an hour or 2 hours wait for the movie time. Also, check Rain forest first if your time is limited. It always has a line and close earlier than aquarium. There never be a line to aquarium. 2.On summer Thursday nights, they offer half price happy hour tickets and serve wine and beer. Fore more detail please check their website. ',
      category: 'Play',
      image: 'http://www.calacademy.org/sites/default/files/styles/manual_crop_standard_960x540/public/assets/images/KW_IMAGES_DO_NOT_USE/admission-.jpg?itok=Msauwoc1'

      },
      {id: 4,
        location: 'Haight-Ashbury, San Francisco, CA, United States',
      name: 'Head to Haight Ashbury',
      desc: 'After a long day in golden gate park area, Lets head to Haight-Ashbury street and see the other face of San Francisco. If you are curious about the San Francisco hippies culture at 60s. This is where to find it. Walk down the street you will see all those fun clothing, accessory and toy stores that pursuit the spirits of hippies. At the end of the street, you will see the restaurant Cha Cha Cha at your left(1801 Haight st), at the corner of shredder, this is our end up dinner place! Woo!(Yes, I will never forget about food). They offer small tapas with reasonable price and good sangria.',
      category: 'Play',
      image: 'https://santacruzrehearsalstudios.files.wordpress.com/2011/03/haightashburystsign.jpg'

      }
      ],
    author: 'Katie'
  }, {
    id: 1,
    title: 'SF - Ferry - Tiburon',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: 2,
    city: 'San Francisco',
    items: [{}],
    author: 'Manu'
  }, {
    id: 2,
    title: 'SF - Ferry - Tiburon',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: 3,
    city: 'San Francisco',
    items: [{}],
    author: 'George'
  }, {
    id: 3,
    title: 'SF - Ferry - Tiburon',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: 0.5,
    city: 'San Francisco',
    items: [{}],
    author: 'Jack'
  }, {
    id: 4,
    title: 'SF - Ferry - Tiburon',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: .5,
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
    title: 'Portland Food Trucks + Hike',
    description: 'Great way to spend the day outdoors!',
    image: 'https://lostgander.files.wordpress.com/2012/05/img_1333.jpg',
    date_created: new Date(),
    itin_duration_days: 1,
    city: 'Portland',
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