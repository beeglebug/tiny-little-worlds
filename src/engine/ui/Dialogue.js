import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import UI from './components/UI'

const SET_DIALOGUE = 'SET_DIALOGUE'
const SET_VISIBLE = 'SET_VISIBLE'

const reducers = {
  visible: (state = false, action) => {
    if (action.type === SET_VISIBLE) return action.payload
    return state
  },
  dialogue: (state = '', action) => {
    if (action.type === SET_DIALOGUE) return action.payload
    return state
  },
}

const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ name: 'UI' }),
)

export default {

  init: () => {

    const element = document.createElement('div')

    ReactDOM.render((
      <Provider store={store}>
        <UI />
      </Provider>
    ), element)

    return element
  },

  show: (text) => {
    store.dispatch({ type: SET_DIALOGUE, payload: text })
    store.dispatch({ type: SET_VISIBLE, payload: true })
  },
}
