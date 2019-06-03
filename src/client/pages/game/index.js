import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from '../../state/store'
import GamePage from './GamePage'

const props = window.__PRELOADED_PROPS__ || {}

hydrate(
  (
    <Provider store={createStore()}>
      <GamePage {...props} />
    </Provider>
  ),
  document.getElementById('root')
)
