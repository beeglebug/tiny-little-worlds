import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { START_DIALOGUE, STOP_DIALOGUE } from '../events'
import UI from './components/UI'

const reducers = {
  visible: (state = false, action) => {
    if (action.type === START_DIALOGUE) return true
    if (action.type === STOP_DIALOGUE) return false
    return state
  },
  dialogue: (state = null, action) => {
    if (action.type === START_DIALOGUE) return action.payload
    if (action.type === START_DIALOGUE) return null
    return state
  },
}

const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ name: 'UI' }),
)

export default (engine) => {

  engine.addListener(START_DIALOGUE, text => {
    store.dispatch({ type: START_DIALOGUE, payload: text })
  })

  engine.addListener(STOP_DIALOGUE, () => {
    store.dispatch({ type: STOP_DIALOGUE })
  })

  const element = document.createElement('div')

  ReactDOM.render((
    <Provider store={store}>
      <UI />
    </Provider>
  ), element)

  return element
}
