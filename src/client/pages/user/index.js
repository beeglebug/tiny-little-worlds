import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from '../../state/store'
import UserPage from './UserPage'

const props = window.__PRELOADED_PROPS__ || {}

hydrate(
  (
    <Provider store={createStore()}>
      <UserPage {...props} />
    </Provider>
  ),
  document.getElementById('root')
)
