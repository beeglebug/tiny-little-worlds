import express from 'express'
import User from '../models/User'
import Game from '../models/Game'

const router = express.Router()

async function getUser (request, response) {

  const { username } = request.params

  const user = await User.findOne({ username }).exec()

  if (user === null) {
    return response.sendStatus(404)
  }

  const games = await Game.find({ user: user._id }).exec()

  response.json({
    user,
    games,
  })
}

router.get('/:username', getUser)

export default router
