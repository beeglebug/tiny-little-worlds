import React from 'react'
import { renderToString } from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Game from '../models/Game'
import html from '../templates/index.html'
import stats from '../../../dist/stats.json'
import getAssetsForEntry from '../util/getAssetsForEntry'
import HomePage from '../../client/pages/home/HomePage'

export default async function (request, response) {

  // TODO only get a subset of fields
  const games = await Game
    .find({})
    .populate('user')
    .exec()

  const state = { modals: {} }
  const store = createStore(state => state, state)
  const styles = flushToHTML()

  const props = {
    games: games.map(game => game.toObject()),
  }

  const content = renderToString(
    <Provider store={store}>
      <HomePage {...props} />
    </Provider>
  )

  const scripts = getAssetsForEntry(stats, 'home')

  response.send(html(content, state, props, scripts, styles))
}
