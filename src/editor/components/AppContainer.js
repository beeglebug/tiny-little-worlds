import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../state/store'
import bugsnagClient from '../bugsnag'
import App from './App'

const store = createStore()
const ErrorBoundary = bugsnagClient.getPlugin('react')

export default function AppContainer () {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  )
}
