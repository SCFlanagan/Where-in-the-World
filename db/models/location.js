'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Location = db.define('locations', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lat: {
    type: Sequelize.STRING,
    allowNull: false,
    get: function(lat){
      let unformatted = this.getDataValue(lat);
      let formatted = Number(unformatted);
      return formatted;
    }
  },
  lng: {
    type: Sequelize.STRING,
    allowNull: false,
    get: function(lng){
      let unformatted = this.getDataValue(lng);
      let formatted = Number(unformatted);
      return formatted;
    }
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


module.exports = Location
