import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import StyleContext from 'isomorphic-style-loader/StyleContext'
import UserPage from '../../../server/components/UserPage'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(state => state, preloadedState)

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss())
  return () => removeCss.forEach(dispose => dispose())
}

function App () {
  return (
    <Provider store={store}>
      <StyleContext.Provider value={{ insertCss }}>
        <UserPage />
      </StyleContext.Provider>
    </Provider>
  )
}

hydrate(<App />, document.getElementById('root'))
