import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { flushToHTML } from 'styled-jsx/server'
import { createStore } from 'redux'
import User from '../models/User'
import Game from '../models/Game'
import html from '../templates/index.html'
import getAssetsForEntry from '../util/getAssetsForEntry'
import stats from '../../../dist/stats'
import GamePage from '../../client/pages/game/GamePage'

export default async function (request, response) {

  const { userSlug, gameSlug } = request.params

  const user = await User.findOne({ slug: userSlug }).exec()

  const game = await Game.findOne({ slug: gameSlug, user: user._id }).exec()

  if (game === null) {
    return response.sendStatus(404)
  }

  const state = { modals: {} }
  const store = createStore(state => state, state)
  const styles = flushToHTML()

  const props = {
    user: user.toObject(),
    game: game.toObject(),
  }

  const content = renderToString(
    <Provider store={store}>
      <GamePage {...props} />
    </Provider>
  )

  const scripts = getAssetsForEntry(stats, 'game')

  response.send(html(content, state, props, scripts, styles))
}
