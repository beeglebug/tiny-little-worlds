import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './state/store'
import bugsnagClient from './bugsnag'
import App from './components/App'
import './analytics'

const container = document.getElementById('editor')

const store = createStore()
const ErrorBoundary = bugsnagClient.getPlugin('react')

render(
  <ErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
  , container
)
