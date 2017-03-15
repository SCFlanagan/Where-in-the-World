'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Score = require('./score')
const Location = require('./location')

module.exports = {Score, Location}
