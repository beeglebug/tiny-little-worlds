import express from 'express'
import Game from '../models/Game'
import User from '../models/User'

const router = express.Router()

async function createGame (request, response) {

  const username = 'beeglebug'

  const user = await User.findOne({ username }).exec()

  // TODO slugs should be unique per user

  const game = new Game({
    user,
    name: 'test game',
    slug: 'test',
    description: 'a test game',
  })

  await game.save()

  response.send('ok')
}

async function getGame (request, response) {

  const { username, slug } = request.params

  const user = await User.findOne({ username }).exec()

  const game = await Game.findOne({ slug, user: user._id }).exec()

  if (game === null) {
    return response.sendStatus(404)
  }

  response.json(game)
}

router.get('/test', createGame)

router.get('/:username/:slug', getGame)

export default router
