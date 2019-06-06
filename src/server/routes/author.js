import React from 'react'
import { renderToString } from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'
import User from '../models/User'
import World from '../models/World'
import html from '../templates/index.html'
import AuthorPage from '../../client/pages/AuthorPage'

export default async function (request, response) {

  const { user, params } = request
  const { authorSlug } = params

  const author = await User.findOne({ slug: authorSlug }).exec()

  if (author === null) {
    return response.sendStatus(404)
  }

  // TODO only get a subset of fields
  const worlds = await World
    .find({ author: author._id })
    .exec()

  const props = {
    user,
    author: author.toObject(),
    worlds: worlds.map(world => world.toObject()),
  }

  const content = renderToString(
    <AuthorPage {...props} />
  )

  const styles = flushToHTML()

  response.send(html(content, styles))
}
