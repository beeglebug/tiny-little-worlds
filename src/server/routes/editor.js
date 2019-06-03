import React from 'react'
import { renderToString } from 'react-dom/server'
import User from '../models/User'
import Game from '../models/Game'
import html from '../templates/index.html'
import EditorPage from '../components/EditorPage'

export default async function (request, response) {

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

