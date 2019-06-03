import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import express from 'express'
import User from '../models/User'
import Game from '../models/Game'
import html from '../templates/index.html'
import UserPage from '../components/UserPage'
import stats from '../../../dist/stats.json'

const router = express.Router()

async function getUser (request, response) {

  const { username } = request.params

  // TODO only get a subset of fields
  const user = await User.findOne({ username }).exec()

  if (user === null) {
    return response.sendStatus(404)
  }

  // TODO only get a subset of fields
  const games = await Game.find({ user: user._id }).exec()

  const css = new Set()
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))

  const store = createStore(state => state, {
    modals: {},
    user,
    games,
  })

  const content = renderToString(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <UserPage />
      </StyleContext.Provider>
    </Provider>
  )

  const state = store.getState()

  const scripts = chunksByEntry(stats.assetsByChunkName, 'user')

  response.send(html(content, state, scripts, css))
}

router.get('/:username', getUser)

export default router

function chunksByEntry (chunks, name) {
  return Object.entries(chunks)
    .filter(([key]) => {
      return (key === name || (key.startsWith('vendors') && key.includes(`~${name}`)))
    })
    .map(([, value]) => value)
}
