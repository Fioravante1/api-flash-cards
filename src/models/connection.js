const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

const MONGO_DB = process.env.MONGO_DB_URL

let db = null

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const connection = async () => {
  db
    ? Promise.resolve(db)
    : db = await MongoClient.connect(MONGO_DB, OPTIONS)
  return db.db('Cards')
}

module.exports = connection
