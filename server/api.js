'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))

  // .get('/locations', (req, res, next) => {
  //   Location.findAll()
  //     .then(locations => {
  //       res.send(locations);
  //     })
  //     .catch(console.error)
  // })
  

// No routes matched? 404.
api.use((req, res) => res.status(404).end())