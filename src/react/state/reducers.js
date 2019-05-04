import { SELECT_TILE } from './actions'
import { combineReducers } from 'redux'

const selectedTile = (state = 0, action) => {
  switch (action.type) {
    case SELECT_TILE: return action.payload.tile
    default: return state
  }
}

export default combineReducers({
  selectedTile
})
