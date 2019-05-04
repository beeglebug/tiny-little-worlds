import { combineReducers } from 'redux'
import { SELECT_TILE, SET_MAP_TILE } from './actions'
import initialState from './initialState'

const selectedTile = (state = initialState.selectedTile, action) => {
  switch (action.type) {
    case SELECT_TILE: return action.payload.tile
    default: return state
  }
}


const map = (state = initialState.map, action) => {
  switch (action.type) {
    case SET_MAP_TILE: return setMapTile(state, action.payload)
    default: return state
  }
}

function setMapTile (map, { x, y, tile }) {
  const data = [...map.data]
  const ix = (y * map.width) + x
  data[ix] = tile
  return {
    ...map,
    data
  }
}

export default combineReducers({
  selectedTile,
  map
})
