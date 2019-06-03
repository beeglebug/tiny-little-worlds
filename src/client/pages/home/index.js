import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from '../../state/store'
import HomePage from './HomePage'

hydrate(
  (
    <Provider store={createStore()}>
      <HomePage />
    </Provider>
  ),
  document.getElementById('root')
)
