'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Score = db.define('scores', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  score: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})


module.exports = Score