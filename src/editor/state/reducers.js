import { combineReducers } from 'redux'
import { CLEAR_MAP, LOAD_MAP, SELECT_TILE, SELECT_TOOL, SET_GAME, SET_MAP_TILE } from './actions'
import initialState from './initialState'
import arrayOf from '../util/arrayOf'

const selectedTile = (state = initialState.selectedTile, action) => {
  switch (action.type) {
    case SELECT_TILE: return action.payload.tile
    default: return state
  }
}

const selectedTool = (state = initialState.selectedTool, action) => {
  switch (action.type) {
    case SELECT_TOOL: return action.payload.tool
    default: return state
  }
}

const map = (state = initialState.map, action) => {
  switch (action.type) {
    case SET_MAP_TILE: return setMapTile(state, action.payload)
    case CLEAR_MAP: return {
      ...state,
      data: arrayOf(state.width * state.height, 0)
    }
    case LOAD_MAP: return action.payload.map
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

function game (state = null, action) {
  switch (action.type) {
    case SET_GAME: return action.payload.game
    default: return state
  }
}

export default combineReducers({
  game,
  selectedTile,
  selectedTool,
  map,
})
