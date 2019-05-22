import React from 'react'
import { Provider } from 'react-redux'
import bugsnag from '@bugsnag/js'
import bugsnagReact from '@bugsnag/plugin-react'
import createStore from '../state/store'
import App from './App'

const bugsnagClient = bugsnag({
  apiKey: '8e5064d22138ece6973c0251729945e7',
  appVersion: __VERSION,
})

bugsnagClient.use(bugsnagReact, React)

const ErrorBoundary = bugsnagClient.getPlugin('react')

const store = createStore()

export default function AppContainer () {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  )
}
