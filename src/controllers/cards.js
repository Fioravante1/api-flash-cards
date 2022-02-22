const express = require('express')
const rescue = require('express-rescue')

const Service = require('../services/cards')

const cardsRouter = express.Router()

cardsRouter.get('/', rescue(async (req, res) => {
  const cardsAll = await Service.getAll()
  return res.status(200).json(cardsAll)
}))

cardsRouter.get('/:id', rescue(async (req, res) => {
  const { id } = req.params
  const card = await Service.findById(id)
  console.log(card)
  if (!card) {
    return res.status(409).json({ message: 'id não encontrado' })
  }
  return res.status(200).json(card)
}))

cardsRouter.post('/', rescue(async (req, res) => {
  const card = await Service.create(req.body)
  return res.status(201).json({ card })
}))

cardsRouter.put('/:id', rescue(async (req, res) => {
  const { id } = req.params
  const card = await Service.update(id, req.body)
  return res.status(200).json(card)
}))

cardsRouter.delete('/:id', rescue(async (req, res) => {
  const { id } = req.params
  const card = await Service.deleteCard(id)
  return res.status(204).json(card)
}))

module.exports = cardsRouter
