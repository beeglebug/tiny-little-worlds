import express from 'express'
import Game from '../models/Game'

const router = express.Router()

async function getGame (request, response) {

  const { slug } = request.params

  const game = await Game.findOne({ slug }).exec()

  if (game === null) {
    return response.sendStatus(404)
  }

  return response.json(game)
}

router.get('/api/game/:slug', getGame)

export default router
