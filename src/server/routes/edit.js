import React from 'react'
import { renderToString } from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'
import User from '../models/User'
import World from '../models/World'
import EditPage from '../../client/pages/EditPage'
import html from '../templates/index.html'

export default async function (request, response) {

  const { user, params } = request
  const { authorSlug, worldSlug } = params

  const author = await User.findOne({ slug: authorSlug }).exec()

  if (author === null) {
    return response.sendStatus(404)
  }

  const world = await World.findOne({ slug: worldSlug, author: author._id }).exec()

  if (world === null) {
    return response.sendStatus(404)
  }

  const props = {
    user,
    author: author.toObject(),
    world: world.toObject(),
  }

  const content = renderToString(
    <EditPage {...props} />
  )

  const styles = flushToHTML()

  response.send(html(content, styles))
}
