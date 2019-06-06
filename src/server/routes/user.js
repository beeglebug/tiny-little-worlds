import React from 'react'
import { renderToString } from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'
import World from '../models/World'
import html from '../templates/index.html'
import UserPage from '../../client/pages/UserPage'

export default async function (request, response) {

  const { user } = request

  // TODO only get a subset of fields
  const worlds = await World
    .find({ author: user._id })
    .exec()

  const props = {
    user,
    worlds: worlds.map(world => world.toObject()),
  }

  const content = renderToString(
    <UserPage {...props} />
  )

  const styles = flushToHTML()

  response.send(html(content, styles))
}
