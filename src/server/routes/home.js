import React from 'react'
import { renderToString } from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'
import World from '../models/World'
import html from '../templates/index.html'
import HomePage from '../../client/pages/HomePage'

export default async function (request, response) {

  const { user } = request

  // TODO only get a subset of fields
  const worlds = await World
    .find({})
    .populate('author')
    .exec()

  const props = {
    user,
    worlds: worlds.map(world => world.toObject()),
  }

  const content = renderToString(
    <HomePage {...props} />
  )

  const styles = flushToHTML()

  response.send(html(content, styles))
}
