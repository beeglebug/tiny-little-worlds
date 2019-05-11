export const SELECT_TILE = 'SELECT_TILE'
export const SELECT_TOOL = 'SELECT_TOOL'
export const SET_MAP_TILE = 'SET_MAP_TILE'
export const CLEAR_MAP = 'CLEAR_MAP'
export const SET_GAME = 'SET_GAME'
export const SET_SHOW_GRID = 'SET_SHOW_GRID'

export const selectTileAction = (tile) => ({
  type: SELECT_TILE,
  payload: tile,
})

export const selectToolAction = (tool) => ({
  type: SELECT_TOOL,
  payload: tool,
})

export const setMapTileAction = (x, y, tileId) => ({
  type: SET_MAP_TILE,
  payload: { x, y, tileId },
})

export const clearMapAction = (levelIx = 0) => ({
  type: CLEAR_MAP,
  payload: levelIx,
})

export const setGameAction = game => ({
  type: SET_GAME,
  payload: game,
})

export const setShowGridAction = showGrid => ({
  type: SET_SHOW_GRID,
  payload: showGrid,
})
