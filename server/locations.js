const db = require('APP/db')
const api = module.exports = require('express').Router()
const { Location } = require('../db/models')


api.get('/', (req, res, next) => {
    Location.findAll()
      .then(locations => {
        res.send(locations);
      })
      .catch(console.error)
  })