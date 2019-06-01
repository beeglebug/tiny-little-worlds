import mongoose from 'mongoose'

const { Schema, model } = mongoose

const schema = new Schema({
  slug: String,
  name: String,
  description: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Game = model('Game', schema)

export default Game
