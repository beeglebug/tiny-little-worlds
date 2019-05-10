export const SELECT_TILE = 'SELECT_TILE'
export const SELECT_TOOL = 'SELECT_TOOL'
export const SET_MAP_TILE = 'SET_MAP_TILE'
export const CLEAR_MAP = 'CLEAR_MAP'
export const LOAD_MAP = 'LOAD_MAP'
export const SET_GAME = 'SET_GAME'

export const selectTileAction = (tile) => ({
  type: SELECT_TILE,
  payload: { tile }
})

export const selectToolAction = (tool) => ({
  type: SELECT_TOOL,
  payload: { tool }
})

export const setMapTileAction = (x, y, tile) => ({
  type: SET_MAP_TILE,
  payload: { x, y, tile }
})

export const clearMapAction = () => ({
  type: CLEAR_MAP,
})

export const loadMapAction = (map) => ({
  type: LOAD_MAP,
  payload: { map }
})

/**
 * Dump an entire game into state
 */
export const setGameAction = game => ({
  type: SET_GAME,
  payload: { game },
})
