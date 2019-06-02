import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import express from 'express'
import User from '../models/User'
import Game from '../models/Game'
import html from '../templates/index.html'
import UserPage from '../components/UserPage'
import { createStore } from 'redux'

const router = express.Router()

async function getUser (request, response) {

  const { username } = request.params

  const user = await User.findOne({ username }).exec()

  if (user === null) {
    return response.sendStatus(404)
  }

  const games = await Game.find({ user: user._id }).exec()

  const css = new Set()
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()))

  const store = createStore(state => state, { modals: {} })

  const content = renderToString(
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <UserPage
          user={user}
          games={games}
        />
      </StyleContext.Provider>
    </Provider>
  )

  const state = store.getState()

  response.send(html(content, state, css))
}

router.get('/:username', getUser)

export default router
