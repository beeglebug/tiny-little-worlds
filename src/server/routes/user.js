import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { flushToHTML } from 'styled-jsx/server'
import User from '../models/User'
import Game from '../models/Game'
import html from '../templates/index.html'
import stats from '../../../dist/stats.json'
import getAssetsForEntry from '../util/getAssetsForEntry'
import UserPage from '../../client/pages/user/UserPage'

export default async function (request, response) {

  const { slug } = request.params

  const user = await User.findOne({ slug }).exec()

  // TODO only get a subset of fields
  const games = await Game
    .find({ user: user._id })
    .exec()

  const state = { modals: {} }
  const store = createStore(state => state, state)
  const styles = flushToHTML()

  const props = {
    user: user.toObject(),
    games: games.map(game => game.toObject()),
  }

  const content = renderToString(
    <Provider store={store}>
      <UserPage {...props} />
    </Provider>
  )

  const scripts = getAssetsForEntry(stats, 'user')
console.log('ssr user')
  response.send(html(content, state, props, scripts, styles))
}
