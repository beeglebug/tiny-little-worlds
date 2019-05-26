import { combineReducers } from 'redux'
import { TOOLS } from '../../consts'
import { SET_CURRENT_ENTITY, SET_CURRENT_TILE, SET_CURRENT_TOOL, SET_SELECTED_ENTITY, SET_SHOW_GRID } from '../actions'
import game from './game'
import modals from './modals'
import windows from './windows'

const currentEntity = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_ENTITY: return action.payload
    case SET_CURRENT_TILE: return null
    case SET_CURRENT_TOOL: return maybeClear(state, action)
    default: return state
  }
}

const currentTile = (state = 1, action) => {
  switch (action.type) {
    case SET_CURRENT_TILE: return action.payload
    case SET_CURRENT_ENTITY: return null
    case SET_CURRENT_TOOL: return maybeClear(state, action)
    default: return state
  }
}

const currentTool = (state = TOOLS.PAINT, action) => {
  switch (action.type) {
    case SET_CURRENT_TOOL: return action.payload
    case SET_CURRENT_TILE:
    case SET_CURRENT_ENTITY: return TOOLS.PAINT
    default: return state
  }
}

function selectedEntity (state = null, action) {
  if (action.type === SET_SELECTED_ENTITY) return action.payload
  return state
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
  currentTile,
  currentTool,
  selectedEntity,
  showGrid,
  modals,
  windows,
})

function maybeClear (state, action) {
  if (action.payload === TOOLS.ERASE) return null
  if (action.payload === TOOLS.SELECT) return null
  return state
}
