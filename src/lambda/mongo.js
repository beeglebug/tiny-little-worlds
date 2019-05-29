import mongoose from 'mongoose'

const url = process.env.DB_URL

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', error => console.error('MongoDB connection error:', error))

const gameSchema = new mongoose.Schema({
  slug: String,
})

const Game = mongoose.model('Game', gameSchema)

exports.handler = async function (event, context) {

  const slug = 'examples/getting-started'

  const game = await Game.findOne({ slug })

  if (game === null) {
    return { statusCode: 404, body: 'Not found' }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(game),
  }
}
