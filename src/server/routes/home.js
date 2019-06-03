import React from 'react'
import { renderToString } from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import express from 'express'
import Game from '../models/Game'
import html from '../templates/index.html'

import stats from '../../../dist/stats.json'
import getAssetsForEntry from '../util/getAssetsForEntry'
import HomePage from '../../client/pages/home/HomePage'

const router = express.Router()

router.get('/', async function (request, response) {

  // TODO only get a subset of fields
  const games = await Game.find().exec()

  const store = createStore(state => state, { games })

  const styles = flushToHTML()

  const content = renderToString(
    <Provider store={store}>
      <HomePage />
    </Provider>
  )

  const state = store.getState()

  const scripts = getAssetsForEntry(stats, 'home')

  response.send(html(content, state, scripts, styles))
})

export default router
