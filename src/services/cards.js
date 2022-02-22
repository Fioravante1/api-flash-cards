const Model = require('../models/cards')

const getAll = async () => {
  const cards = await Model.getAll()
  return cards
}

const findById = async (id) => {
  const card = await Model.findById(id)
  if (!card) {
    return null
  }
  return card
}

const create = async (card) => {
  const newCard = await Model.create(card)
  return newCard
}

const update = async (id, card) => {
  const cardUpdate = await Model.update(id, card)
  return cardUpdate
}

const deleteCard = async (id) => {
  const card = await Model.deleteCard(id)
  return card
}

module.exports = {
  getAll,
  create,
  deleteCard,
  findById,
  update
}
