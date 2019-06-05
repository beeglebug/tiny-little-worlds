import React from 'react'
import { renderToString } from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import World from '../models/World'
import html from '../templates/index.html'
import stats from '../../../dist/stats.json'
import getAssetsForEntry from '../util/getAssetsForEntry'
import HomePage from '../../client/pages/HomePage'

export default async function (request, response) {

  // TODO only get a subset of fields
  let worlds = await World
    .find({})
    .populate('author')
    .exec()

  worlds = worlds.map(world => world.toObject())

  const content = renderToString(
    <HomePage worlds={worlds} />
  )

  response.send(content)
}
