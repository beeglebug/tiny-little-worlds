export const SELECT_ENTITY = 'SELECT_ENTITY'
export const SELECT_TILE = 'SELECT_TILE'
export const SELECT_TOOL = 'SELECT_TOOL'
export const SET_MAP_TILE = 'SET_MAP_TILE'
export const SET_MAP_ENTITY = 'SET_MAP_ENTITY'
export const CLEAR_MAP_ENTITY = 'CLEAR_MAP_ENTITY'
export const CLEAR_MAP_ENTITIES = 'CLEAR_MAP_ENTITIES'
export const CLEAR_MAP = 'CLEAR_MAP'
export const SET_GAME = 'SET_GAME'
export const SET_SHOW_GRID = 'SET_SHOW_GRID'
export const SET_WINDOW_VISIBILITY = 'SET_WINDOW_VISIBILITY'

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

export const setMapTileAction = (x, y, tileId, levelIndex = 0) => ({
  type: SET_MAP_TILE,
  payload: { x, y, tileId, levelIndex },
})

export const setMapEntityAction = (x, y, entityId, levelIndex = 0) => ({
  type: SET_MAP_ENTITY,
  payload: { x, y, entityId, levelIndex },
})

export const clearMapEntityAction = (x, y, levelIndex = 0) => ({
  type: CLEAR_MAP_ENTITY,
  payload: { x, y, levelIndex },
})

export const clearMapEntitiesAction = (entityId, levelIndex = 0) => ({
  type: CLEAR_MAP_ENTITIES,
  payload: { entityId, levelIndex },
})

export const clearMapAction = (levelIndex = 0) => ({
  type: CLEAR_MAP,
  payload: levelIndex,
})

export const setGameAction = game => ({
  type: SET_GAME,
  payload: game,
})

export const setShowGridAction = showGrid => ({
  type: SET_SHOW_GRID,
  payload: showGrid,
})

export const setWindowVisibilityAction = (window, visibility) => ({
  type: SET_WINDOW_VISIBILITY,
  payload: { window, visibility },
})
