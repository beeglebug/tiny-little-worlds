import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { flushToHTML } from 'styled-jsx/server'
import { createStore } from 'redux'
import User from '../models/User'
import World from '../models/World'
import html from '../templates/index.html'
import getAssetsForEntry from '../util/getAssetsForEntry'
import stats from '../../../dist/stats'
import WorldPage from '../../client/pages/WorldPage'

export default async function (request, response) {

  const { authorSlug, worldSlug } = request.params

  let author = await User.findOne({ slug: authorSlug }).exec()

  if (author === null) {
    return response.sendStatus(404)
  }

  let world = await World.findOne({ slug: worldSlug, author: author._id }).exec()

  if (world === null) {
    return response.sendStatus(404)
  }

  author = author.toObject()
  world = world.toObject()

  const content = renderToString(
    <WorldPage
      author={author}
      world={world}
    />
  )

  response.send(content)
}
