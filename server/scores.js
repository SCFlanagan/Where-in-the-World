const db = require('APP/db')
const api = module.exports = require('express').Router()
const { Score } = require('../db/models')


api.get('/', (req, res, next) => {
  Score.findAll()
    .then(scores => {
      res.send(scores);
    })
    .catch(next)
})

api.post('/', (req, res, next) => {
  Score.create(req.body)
  .then(created => {
    res.send(created);
  })
  .catch(next)
})

api.delete('/:scoreId', (req, res, next) => {
  Score.destroy({
    where: {
      id: req.params.scoreId
    }
  })
    .then(destroyed => res.sendStatus(204))
    .catch(next)
})