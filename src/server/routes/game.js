import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import User from '../models/User'
import Game from '../models/Game'
import html from '../templates/index.html'
import GamePage from '../components/GamePage'
import EditorPage from '../components/EditorPage'

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

// TODO middleware to get user and game from url params

async function getGame (request, response) {

  const { username, slug } = request.params

  const user = await User.findOne({ username }).exec()

  const game = await Game.findOne({ slug, user: user._id }).exec()

  if (game === null) {
    return response.sendStatus(404)
  }

  const content = renderToString(
    <GamePage
      user={user}
      game={game}
    />
  )

  response.send(html(content))
}

async function getGameEditor (request, response) {

  const { username, slug } = request.params

  const user = await User.findOne({ username }).exec()

  const game = await Game.findOne({ slug, user: user._id }).exec()

  if (game === null) {
    return response.sendStatus(404)
  }

  const content = renderToString(
    <EditorPage
      user={user}
      game={game}
    />
  )

  response.send(html(content))
}

// router.get('/test', createGame)
router.get('/:username/:slug', getGame)
router.get('/:username/:slug/edit', getGameEditor)

export default router
