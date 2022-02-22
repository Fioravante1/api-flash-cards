const { ObjectId } = require('mongodb')
const connection = require('./connection')

const findById = async (id) => {
  const db = await connection()
  if (!ObjectId.isValid(id)) {
    return null
  }
  return db.collection('FlashCards').findOne(ObjectId(id))
}

const getAll = async () => {
  const db = await connection()
  return db.collection('FlashCards').find().toArray()
}

const create = async (card) => {
  const { title, description } = card
  const db = await connection()
  const newCard = await db.collection('FlashCards').insertOne(card)
  const { insertedId } = newCard
  return {
    title,
    description,
    insertedId
  }
}

const update = async (id, card) => {
  const db = await connection()
  if (!ObjectId.isValid(id)) {
    return null
  }
  await db.collection('FlashCards').updateOne({ _id: ObjectId(id) }, { $set: card })
  return findById(id)
}

const deleteCard = async (id) => {
  const db = await connection()
  if (!ObjectId.isValid(id)) {
    return null
  }
  const card = await findById(id)
  db.collection('FlashCards').deleteOne({ _id: ObjectId(id) })
  return card
}

module.exports = {
  getAll,
  create,
  findById,
  deleteCard,
  update
}
