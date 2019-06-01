import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import User from '../models/User'
import Game from '../models/Game'
import html from '../templates/index.html'
import UserPage from '../components/UserPage'

const router = express.Router()

async function getUser (request, response) {

  const { username } = request.params

  const user = await User.findOne({ username }).exec()

  if (user === null) {
    return response.sendStatus(404)
  }

  const games = await Game.find({ user: user._id }).exec()

  const content = renderToString(
    <UserPage
      user={user}
      games={games}
    />
  )

  response.send(html(content))
}

router.get('/:username', getUser)

export default router
