'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const User = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  highScore: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: null
  }
})


module.exports = User