export const SELECT_ENTITY = 'SELECT_ENTITY'
export const SELECT_TILE = 'SELECT_TILE'
export const SELECT_TOOL = 'SELECT_TOOL'
export const SET_MAP_TILE = 'SET_MAP_TILE'
export const CLEAR_MAP = 'CLEAR_MAP'
export const SET_GAME = 'SET_GAME'
export const SET_SHOW_GRID = 'SET_SHOW_GRID'

export const selectEntityAction = (entityType) => ({
  type: SELECT_ENTITY,
  payload: entityType,
})

export const selectTileAction = (tile) => ({
  type: SELECT_TILE,
  payload: tile,
})

export const selectToolAction = (tool) => ({
  type: SELECT_TOOL,
  payload: tool,
})

export const setMapTileAction = (x, y, tileId, levelId = 1) => ({
  type: SET_MAP_TILE,
  payload: { x, y, tileId, levelId },
})

export const clearMapAction = (levelId = 1) => ({
  type: CLEAR_MAP,
  payload: levelId,
})

export const setGameAction = game => ({
  type: SET_GAME,
  payload: game,
})

export const setShowGridAction = showGrid => ({
  type: SET_SHOW_GRID,
  payload: showGrid,
})
