import { combineReducers } from 'redux'
import { TOOLS } from '../../consts'
import { SELECT_ENTITY, SELECT_TILE, SELECT_TOOL, SET_SHOW_GRID } from '../actions'
import game from './game'

const selectedEntity = (state = null, action) => {
  switch (action.type) {
    case SELECT_ENTITY: return action.payload
    case SELECT_TILE: return null
    case SELECT_TOOL: return maybeClear(state, action)
    default: return state
  }
}

const selectedTile = (state = 1, action) => {
  switch (action.type) {
    case SELECT_TILE: return action.payload
    case SELECT_ENTITY: return null
    case SELECT_TOOL: return maybeClear(state, action)
    default: return state
  }
}

function maybeClear (state, action) {
  if (action.payload === TOOLS.ERASE) return null
  return state
}

const selectedTool = (state = TOOLS.PAINT, action) => {
  switch (action.type) {
    case SELECT_TOOL: return action.payload
    case SELECT_TILE:
    case SELECT_ENTITY: return TOOLS.PAINT
    default: return state
  }
}

function showGrid (state = true, action) {
  if (action.type === SET_SHOW_GRID) return action.payload
  return state
}

export default combineReducers({
  game,
  selectedEntity,
  selectedTile,
  selectedTool,
  showGrid,
})
