import mongoose from 'mongoose'

const url = process.env.DB_URL

export function connect () {

  mongoose.connect(url, { useNewUrlParser: true })

  const db = mongoose.connection

  db.on('error', error => console.error('MongoDB connection error:', error))

}

const gameSchema = new mongoose.Schema({})

export const Game = mongoose.model('Game', gameSchema)
