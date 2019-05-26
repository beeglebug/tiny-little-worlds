import { combineReducers } from 'redux'
import { TOOLS } from '../../consts'
import { SET_CURRENT_ENTITY, SELECT_TILE, SELECT_TOOL, SET_SHOW_GRID } from '../actions'
import game from './game'
import modals from './modals'
import windows from './windows'

const currentEntity = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_ENTITY: return action.payload
    case SELECT_TILE: return null
    case SELECT_TOOL: return maybeClear(state, action)
    default: return state
  }
}

const selectedTile = (state = 1, action) => {
  switch (action.type) {
    case SELECT_TILE: return action.payload
    case SET_CURRENT_ENTITY: return null
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
    case SET_CURRENT_ENTITY: return TOOLS.PAINT
    default: return state
  }
}

function showGrid (state = true, action) {
  if (action.type === SET_SHOW_GRID) return action.payload
  return state
}

function currentLevel (state = 0, action) {
  return state
}

function currentPalette (state = 0, action) {
  return state
}

export default combineReducers({
  game,
  currentLevel,
  currentPalette,
  currentEntity,
  selectedTile,
  selectedTool,
  showGrid,
  modals,
  windows,
})
