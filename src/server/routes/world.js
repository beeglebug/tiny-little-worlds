import React from 'react'
import { renderToString } from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'
import User from '../models/User'
import World from '../models/World'
import html from '../templates/index.html'
import WorldPage from '../../client/pages/WorldPage'
import getAssetsForEntry from '../util/getAssetsForEntry'

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

  const content = renderToString(<WorldPage {...props} />)

  const scripts = getAssetsForEntry('header')
  const styles = flushToHTML()

  response.send(html(content, props, scripts, styles))
}
