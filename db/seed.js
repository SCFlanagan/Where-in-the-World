const db = require('APP/db')

const seedScores = () => db.Promise.map([
  {name: 'Susan', score: '110.5'},
  {name: 'Bubby', score: '90.3'},
  {name: 'Patrick', score: '120.4'},
  {name: 'Bubby', score: '90.3'},
  {name: 'Bubby', score: '90.3'},
  {name: 'Bubby', score: '90.3'},
  {name: 'Bubby', score: '90.3'},
  {name: 'Bubby', score: '90.3'},
  {name: 'Bubby', score: '90.3'},
  {name: 'Bubby', score: '100000'},
], score => db.model('scores').create(score))

const seedLocations = () => db.Promise.map([
  {name: 'Eiffel Tower', location: 'Paris, France', lat: '48.856309', lng: '2.297707', category: 'International'},
  {name: 'Kremlin', location: 'Moscow, Russia', lat: '55.752204', lng: '37.617521', category: 'International'},
  {name: 'Sydney Opera House', location: 'Sydney, Australia', lat: '-33.856579', lng: '151.215275', category: 'International'},
  {name: 'Christ the Redeemer', location: 'Rio de Janeiro, Brazil', lat: '-22.951689', lng: '-43.210498', category: 'International'},
  {name: 'Saint Peter\'s Square', location: 'Vatican City', lat: '41.9024673', lng: '12.4583693', category: 'International'},
  {name: 'Palace of Versailles', location: 'Versailles, France', lat: '48.804976', lng: '2.119592', category: 'International'},
  {name: 'Taj Mahal', location:'Agra, India', lat: '27.175395', lng: '78.042215', category: 'International'},
  {name: 'Big Ben', location: 'London, England', lat: '51.500936', lng: '-0.124593', category: 'International'},
  {name: 'La Sagrada Familia', location: 'Barcelona, Spain', lat: '41.403196', lng: '2.173622', category: 'International'},
  {name: 'St. Basil\'s Cathedral', location: 'Moscow, Russia', lat: '55.752363', lng: '37.622181', category: 'International'},
  {name: 'Burj Khalifa', location: 'Dubai, United Arab Emirates', lat: '25.196890', lng: '55.272994', category: 'International'},
  {name: 'Trevi Fountain', location: 'Rome, Italy', lat: '41.900845', lng: '12.483316', category: 'International'},
  {name: 'Sacre-Coeur', location: 'Paris, France', lat: '48.886031', lng: '2.342556', category: 'International'},
  {name: 'Rock of Gibraltar', location: 'Gibraltar, British Overseas Territory', lat: '36.154869', lng: '-5.340573', category: 'International'},
  {name: 'Bridge of Sighs', location: 'Venice, Italy', lat: '45.433974', lng: '12.340897', category: 'International'},
  {name: 'Floating Piers', location: 'Lake Iseo, Italy', lat: '45.694823', lng: '10.080158', category: 'International'},
  {name: 'The Blue Mosque', location: 'Istanbul, Turkey', lat: '41.005636', lng: '28.977298', category: 'International'},
  {name: 'Notre Dame Cathedral', location: 'Paris, France', lat: '48.8533944',lng: '2.3487021', category: 'International'},
  {name: 'Arc de Triomphe', location: 'Paris, France', lat: '48.8742049',lng: '2.2942469', category: 'International'},
  {name: 'Louvre Museum', location: 'Paris, France', lat: '48.8615043', lng: '2.3345452', category: 'International'},
  {name: 'St. Maria of Florence Cathedral', location: 'Florence, Italy', lat: '43.772742',lng: '11.2577581', category: 'International'},
  {name: 'Charles Bridge', location: 'Prague, Czech Republic', lat: '50.0862467', lng: '14.4133246', category: 'International'},
  {name: 'Sensoji Temple', location: 'Tokyo, Japan', lat: '35.7145112', lng: '139.7963243', category: 'International'},
  {name: 'Chateau Frontenac', location: 'Quebec, Canada', lat: '46.8126936', lng: '-71.2053647', category: 'International'},
  {name: 'Wat Chaiwatthanaram', location: 'Ayutthaya Historical Park, Thailand', lat: '14.3428676', lng: '100.541639', category: 'International'},
  {name: 'Phranang Cave Beach', location: 'Ao Nang, Thailand', lat: '8.0057457', lng: '98.8373378', category: 'International'},
  {name: 'Dongchu Old Monastery', location: 'Kathmandu, Nepal', lat: '27.7149307', lng: '85.2901342', category: 'International'},
  {name: 'Potala Palace', location: 'Lhasa, Tibet Autonomous Region, China', lat: '29.6560051', lng: '91.1173856', category: 'International'},

  {name: 'Grand Canyon', location: 'Arizona, USA', lat: '36.066508', lng: '-112.145978', category: 'Natural Wonders'},
  {name: 'Niagara Falls', location: 'New York, USA', lat: '43.086554', lng: '-79.068747', category: 'Natural Wonders'},
  {name: 'Iguazu National Park', location: 'Argentina', lat: '-25.687218', lng: '-54.443498', category: 'Natural Wonders'},
  {name: 'Amazon River', location: 'Brazil', lat: '-3.137768', lng: '-60.493357', category: 'Natural Wonders'},
  {name: 'El Capitan in Yosemite National Park', location: 'California, USA', lat: '37.722403', lng: '-119.632899', category: 'Natural Wonders'},
  {name: 'Redwood National Park', location: 'California, USA', lat: '41.376549', lng: '-124.002877', category: 'Natural Wonders'},
  {name: 'Lake Titicaca', location: 'Chile', lat: '-15.425433', lng: '-69.477246', category: 'Natural Wonders'},
  {name: 'Mt. Everest', location: 'Nepal', lat: '28.002442', lng: '86.852606', category: 'Natural Wonders'},
  {name: 'Uluru', location: 'Australia', lat: '-25.3349039', lng: '131.0351441', category: 'Natural Wonders'},
  {name: 'Waters by Base Yelcho', location: 'Antarctica', lat: '-64.6231301', lng: '-62.5566927', category: 'Natural Wonders'},
  {name: 'Geirangerfjord', location: 'Norway', lat: '62.1262049', lng: '7.1672904', category: 'Natural Wonders'},
  {name: 'Mount Etna', location: 'Italy', lat: '37.7544523', lng: '14.9957855', category: 'Natural Wonders'},
  {name: 'Everglades National Park', location: 'Florida, USA', lat: '25.6657459', lng: '-81.3646824', category: 'Natural Wonders'},
  {name: 'Zion National Park', location: 'Utah, USA', lat: '37.2841298', lng: '-113.0963908', category: 'Natural Wonders'},
  {name: 'Uyuni Salt Flats', location: 'Bolivia', lat: '-20.1809319', lng: '-67.8708744', category: 'Natural Wonders'},
  {name: 'Ilulissat Icefjord', location: 'Greenland', lat: '69.2079412', lng: '-51.1631219', category: 'Natural Wonders'},
  {name: 'Los Glaciares National Park', location: 'Patagonia region of Argentina', lat: '-50.4897493', lng: '-73.0531699', category: 'Natural Wonders'},
  {name: 'Dettifoss Waterfall', location: 'Iceland', lat: '65.8154221', lng: '-16.3838642', category: 'Natural Wonders'},

  {name: 'Statue of Liberty', location: 'New York City, New York', lat: '40.689860', lng: '-74.043477', category: 'United States'},
  {name: 'Hollywood Sign', location: 'Los Angeles, California', lat: '34.1311194', lng: '-118.320428', category: 'United States'},
  {name: 'Alcatraz Island', location: 'San Francisco, California', lat: '37.8261644', lng: '-122.4219664', category: 'United States'},
  {name: 'Lincoln Memorial', location: 'Washington, D.C', lat: '38.889298', lng: '-77.049019', category: 'United States'},
  {name: 'Las Vegas Strip', location: 'Las Vegas, Nevada', lat: '36.112033', lng: '-115.173029', category: 'United States'},
  {name: 'Mt. Rushmore', location: 'Keystone, South Dakota', lat: '43.876985', lng: '-103.455860', category: 'United States'},
  {name: 'Magic Kingdom Theme Park', location: 'Lake Buena Vista, Florida', lat: '28.4203421', lng: '-81.5812242', category: 'United States'},
  {name: 'Times Square', location: 'New York City, New York', lat: '40.7583767', lng: '-73.9853214', category: 'United States'},
  {name: 'Gateway Arch', location: 'St. Louis, Missouri', lat: '38.6253808', lng: '-90.1887464', category: 'United States'},
  {name: 'Bourbon St. in the French Quarter', location: 'New Orleans, Louisiana', lat: '29.9577009', lng: '-90.0665021', category: 'United States'},
  {name: 'Hoover Dam', location: 'Colorado River between Nevada and Arizona', lat: '36.0165997', lng: '-114.7381109', category: 'United States'},
  {name: 'Space Needle', location: 'Seattle, Washington', lat: '47.6196712', lng: '-122.3488705', category: 'United States'},
  {name: 'Golden Gate Bridge', location: 'San Francisco, California', lat: '37.8085115', lng: '-122.4753632', category: 'United States'},
  {name: 'Alamo Mission', location: 'San Antonio, Texas', lat: '29.4258226', lng: '-98.4864599', category: 'United States'},
  {name: 'Massachusetts State House', location: 'Boston , Massachusetts', lat: '42.357582',lng: '-71.0635701', category: 'United States'},
  {name: 'Turtle Boy Statue', location: 'Worcester, Massachusetts', lat: '42.2612648', lng: '-71.8003616', category: 'United States'},
  {name: 'Cloud Gate', location: 'Chicago, Illinois', lat: '41.8827353', lng: '-87.6230201', category: 'United States'},

  {name: 'Colosseum', location: 'Rome, Italy', lat: '41.889694', lng: '12.491002', category: 'Historical Landmarks'},
  {name: 'Sphynx and Pyramids of Giza', location: 'Giza, Egypt', lat: '29.975475', lng: '31.138286', category: 'Historical Landmarks'},
  {name: 'Machu Picchu', location: 'Andes Mountains, Peru', lat: '-13.163427', lng: '-72.545126', category: 'Historical Landmarks'},
  {name: 'Ruins of Pompeii', location: 'Pompeii, Italy', lat: '40.749183', lng: '14.484381', category: 'Historical Landmarks'},
  {name: 'Petra', location: 'Ma\'an, Jordan', lat: '30.324', lng: '35.448303', category: 'Historical Landmarks'},
  {name: 'Stonehenge', location: 'Wiltshire, United Kingdom', lat: '51.178895', lng: '-1.826247', category: 'Historical Landmarks'},
  {name: 'Angkor Wat Temple', location: 'Krong Siem Reap, Cambodia', lat: '13.412460', lng: '-103.868414', category: 'Historical Landmarks'},
  {name: 'Acropolis', location: 'Athens, Greece', lat: '37.971945', lng: '23.7267383', category: 'Historical Landmarks'},
  {name: 'Great Wall of China', location: 'China', lat: '40.4325705', lng: '116.5698324', category: 'Historical Landmarks'},
  {name: 'Mayan city of Tikal', location: 'Tikal, Guatemala', lat: '17.2221192', lng: '-89.6236287', category: 'Historical Landmarks'},
  {name: 'Cliff Palace', location: 'Mesa Verde National Park, New Mexico, USA', lat: '37.1668885', lng: '-108.4733944', category: 'Historical Landmarks'}
], location => db.model('locations').create(location))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedScores)
  .then(scores => console.log(`Seeded ${scores.length} scores OK`))
  .then(seedLocations)
  .then(locations => console.log(`Seeded ${locations.length} locations Ok`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
