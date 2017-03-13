// 'use strict'

// const Sequelize = require('sequelize')
// const db = require('APP/db')
// const {Review, User} = require('./index')

// const Location = db.define('locations', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   lat: {
//     type: Sequelize.INTEGER,
//     defaultValue: 0,
//     get: function(lat){
//       let unformatted = this.getDataValue(lat);
//       let formatted = unformatted / 100;
//       return formatted
//     }
//   },
//   lng: {
//     type: Sequelize.INTEGER,
//     defaultValue: 0,
//     get: function(lng){
//       let unformatted = this.getDataValue(lng);
//       let formatted = unformatted / 100;
//       return formatted
//     }
//   },
//   category: {
//     type: Sequelize.STRING,
//     defaultValue: null
//   },
// })


module.exports = Location
