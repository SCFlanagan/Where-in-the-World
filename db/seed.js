const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'SUnited Statesn', password: 'sUnited Statesn'}
], user => db.model('users').create(user))

const seedLocations = () => db.Promise.map([
  {name: 'the Eiffel Tower in Paris, France', lat: '48.856309', lng: '2.297707', category: 'International'},
  {name: 'the Kremlin, in Moscow, Russia', lat: '55.752204', lng: '37.617521', category: 'International'},
  {name: 'the Sydney Opera House in Sydney, Australia', lat: '-33.856579', lng: '151.215275', category: 'International'},
  {name: 'Christ the Redeemer, in Rio de Janeiro', lat: '-22.951689', lng: '-43.210498', category: 'International'},
  {name: 'the Vatican in Rome, Italy', lat: '41.9024673', lng: '12.4583693', category: 'International'},
  {name: 'Versailles Palace in Versailles, France', lat: '48.804976', lng: '2.119592', category: 'International'},
  {name: 'the Taj Mahal in Agra, India', lat: '27.175395', lng: '78.042215', category: 'International'},
  {name: 'Big Ben, in London, England', lat: '51.500936', lng: '-0.124593', category: 'International'},
  {name: 'La Sagrada Familia', lat: '41.403196', lng: '2.173622', category: 'International'},
  {name: 'St. Basil\'s Cathedral', lat: '55.752363', lng: '37.622181', category: 'International'},
  {name: 'the Burj Khalifa in Dubai', lat: '25.196890', lng: '55.272994', category: 'International'},
  {name: 'the Trevi Fountain in Rome, Italy', lat: '41.900845', lng: '12.483316', category: 'International'},
  {name: 'Sacre-Coeur in Paris, France', lat: '48.886031', lng: '2.342556', category: 'International'},
  {name: 'the Rock of Gibraltar', lat: '36.154869', lng: '-5.340573', category: 'International'},
  {name: 'the Bridge of Sighs in Venice, Italy', lat: '45.433974', lng: '12.340897', category: 'International'},
  {name: 'the Floating Piers on Lake Iseo in Italy', lat: '45.694823', lng: '10.080158', category: 'International'},
  {name: 'The Blue Mosque in Istanbul, Turkey', lat: '41.005636', lng: '28.977298', category: 'International'},
  {name: 'the Notre Dame Cathedral in Paris, France', lat: '48.8533944',lng: '2.3487021', category: 'International'},
  {name: 'the Arc de Triomphe in Paris, France', lat: '48.8742049',lng: '2.2942469', category: 'International'},
  {name: 'the Louvre Museum in Paris, France', lat: '48.8615043', lng: '2.3345452', category: 'International'},
  {name: 'St. Maria of Florence Cathedral in Florence, Italy', lat: '43.772742',lng: '11.2577581', category: 'International'},
  {name: 'Charles Bridge in Prague', lat: '50.0862467', lng: '14.4133246', category: 'International'},
  {name: 'Sensoji Temple in Tokyo, Japan', lat: '35.7145112', lng: '139.7963243', category: 'International'},
  {name: 'the Chateau Frontenac in Quebec, Canada', lat: '46.8126936', lng: '-71.2053647', category: 'International'},
  {name: 'Wat Chaiwatthanaram in Thailand', lat: '14.3428676', lng: '100.541639', category: 'International'},
  {name: 'Phranang Cave Beach in Thailand', lat: '8.0057457', lng: '98.8373378', category: 'International'},
  {name: 'Dongchu Old Monastery in Kathmandu, Nepal', lat: '27.7149307', lng: '85.2901342', category: 'International'},
  {name: 'Potala Palace in China', lat: '29.6560051', lng: '91.1173856', category: 'International'},

  {name: 'the Grand Canyon in Arizona', lat: '36.066508', lng: '-112.145978', category: 'Natural Wonders'},
  {name: 'Niagara Falls in New York', lat: '43.086554', lng: '-79.068747', category: 'Natural Wonders'},
  {name: 'Iguazu National Park in Argentina', lat: '-25.687218', lng: '-54.443498', category: 'Natural Wonders'},
  {name: 'the Amazon River in Brazil', lat: '-3.137768', lng: '-60.493357', category: 'Natural Wonders'},
  {name: 'El Capitan in Yosemite National Park in California', lat: '37.722403', lng: '-119.632899', category: 'Natural Wonders'},
  {name: 'Redwood National Park in California', lat: '41.376549', lng: '-124.002877', category: 'Natural Wonders'},
  {name: 'Lake Titicaca in Chile', lat: '-15.425433', lng: '-69.477246', category: 'Natural Wonders'},
  {name: 'Mt. Everest in Nepal', lat: '28.002442', lng: '86.852606', category: 'Natural Wonders'},
  {name: 'Uluru in Australia', lat: '-25.3349039', lng: '131.0351441', category: 'Natural Wonders'},
  {name: 'Antartica by Base Yelcho', lat: '-64.6231301', lng: '-62.5566927', category: 'Natural Wonders'},
  {name: 'Geirangerfjord in Norway', lat: '62.1262049', lng: '7.1672904', category: 'Natural Wonders'},
  {name: 'Mount Etna in Italy', lat: '37.7544523', lng: '14.9957855', category: 'Natural Wonders'},
  {name: 'the Everglades in Florida', lat: '25.6657459', lng: '-81.3646824', category: 'Natural Wonders'},
  {name: 'Zion National Park', lat: '37.2841298', lng: '-113.0963908', category: 'Natural Wonders'},
  {name: 'Uyuni Salt Flats in Bolivia', lat: '-20.1809319', lng: '-67.8708744', category: 'Natural Wonders'},
  {name: 'Ilulissat Icefjord in Greenland', lat: '69.2079412', lng: '-51.1631219', category: 'Natural Wonders'},
  {name: 'Los Glaciares National Park in Argentinean Patagonia', lat: '-50.4897493', lng: '-73.0531699', category: 'Natural Wonders'},
  {name: 'Dettifoss waterfall in Iceland', lat: '65.8154221', lng: '-16.3838642', category: 'Natural Wonders'},

  {name: 'the Statue of Liberty in New York City', lat: '40.689860', lng: '-74.043477', category: 'United States'},
  {name: 'the Hollywood Sign in Los Angeles, California', lat: '34.1311194', lng: '-118.320428', category: 'United States'},
  {name: 'Alcatraz Island in San Francisco, California', lat: '37.8261644', lng: '-122.4219664', category: 'United States'},
  {name: 'the Lincoln Memorial in Washington, D.C', lat: '38.889298', lng: '-77.049019', category: 'United States'},
  {name: 'the Las Vegas Strip in Nevada', lat: '36.112033', lng: '-115.173029', category: 'United States'},
  {name: 'Mt. Rushmore in South Dakota', lat: '43.876985', lng: '-103.455860', category: 'United States'},
  {name: 'the Magic Kingdom theme park in Orlando, Florida', lat: '28.4203421', lng: '-81.5812242', category: 'United States'},
  {name: 'Times Square in New York, New York', lat: '40.7583767', lng: '-73.9853214', category: 'United States'},
  {name: 'the Gateway Arch in St. Louis, Missouri', lat: '38.6253808', lng: '-90.1887464', category: 'United States'},
  {name: 'the French Quarter of New Orleans, Louisiana', lat: '29.9577009', lng: '-90.0665021', category: 'United States'},
  {name: 'the Hoover Dam', lat: '36.0165997', lng: '-114.7381109', category: 'United States'},
  {name: 'the Space Needle in Seattle, Washington', lat: '47.6196712', lng: '-122.3488705', category: 'United States'},
  {name: 'the Golden Gate Bridge in San Francisco, California', lat: '37.8085115', lng: '-122.4753632', category: 'United States'},
  {name: 'the Alamo Mission in San Antonio, Texas', lat: '29.4258226', lng: '-98.4864599', category: 'United States'},
  {name: 'Massachusetts State House in Boston , Massachusetts', lat: '42.357582',lng: '-71.0635701', category: 'United States'},
  {name: 'Turtle Boy in Worcester, Massachusetts', lat: '42.2612648', lng: '-71.8003616', category: 'United States'},
  {name: 'Cloud Gate in Chicago, Illinois', lat: '41.8827353', lng: '-87.6230201', category: 'United States'},

  {name: 'the Colosseum in Rome, Italy', lat: '41.889694', lng: '12.491002', category: 'Historical Landmarks'},
  {name: 'the Sphynx and Pyramids of Giza in Egypt', lat: '29.975475', lng: '31.138286', category: 'Historical Landmarks'},
  {name: 'Machu Picchu in Peru', lat: '-13.163427', lng: '-72.545126', category: 'Historical Landmarks'},
  {name: 'the ruins of Pompeii, Italy', lat: '40.749183', lng: '14.484381', category: 'Historical Landmarks'},
  {name: 'the ancient city of Petra in Jordan', lat: '30.324', lng: '35.448303', category: 'Historical Landmarks'},
  {name: 'Stonehenge in the United Kingdom', lat: '51.178895', lng: '-1.826247', category: 'Historical Landmarks'},
  {name: 'Angkor Wat Temple in Cambodia', lat: '13.412460', lng: '-103.868414', category: 'Historical Landmarks'},
  {name: 'the Acropolis in Athens, Greece', lat: '37.971945', lng: '23.7267383', category: 'Historical Landmarks'},
  {name: 'the Great Wall of China', lat: '40.4325705', lng: '116.5698324', category: 'Historical Landmarks'},
  {name: 'the Mayan city of Tikal in Guatemala', lat: '17.2221192', lng: '-89.6236287', category: 'Historical Landmarks'},
  {name: 'the Cliff Palace in Mesa Verde National Park in New Mexico', lat: '37.1668885', lng: '-108.4733944', category: 'Historical Landmarks'}
], location => db.model('locations').create(location))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`Seeded ${users.length} users OK`))
  .then(seedLocations)
  .then(locations => console.log(`Seeded ${locations.length} users Ok`))
  .catch(error => console.error(error))    
  .finally(() => db.close())
