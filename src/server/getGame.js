import mongoose from 'mongoose'

const url = process.env.DB_URL

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', error => console.error('MongoDB connection error:', error))

const gameSchema = new mongoose.Schema({})

const Game = mongoose.model('Game', gameSchema)

export default async function (request, response) {

  const { slug } = request.params

  const game = await Game.findOne({ slug }).exec()

  if (game === null) {
    return response.sendStatus(404)
  }

  return response.json(game)
}
