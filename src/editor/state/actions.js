export const SET_CURRENT_ENTITY = 'SET_CURRENT_ENTITY'
export const SET_CURRENT_TILE = 'SET_CURRENT_TILE'
export const SET_CURRENT_TOOL = 'SET_CURRENT_TOOL'
export const SET_MAP_TILE = 'SET_MAP_TILE'
export const SET_MAP_ENTITY = 'SET_MAP_ENTITY'
export const CLEAR_MAP_ENTITY = 'CLEAR_MAP_ENTITY'
export const CLEAR_MAP_ENTITIES = 'CLEAR_MAP_ENTITIES'
export const CLEAR_MAP = 'CLEAR_MAP'
export const RESIZE_MAP = 'RESIZE_MAP'
export const SET_MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY'
export const SET_GAME = 'SET_GAME'
export const SET_SHOW_GRID = 'SET_SHOW_GRID'
export const SET_WINDOW_VISIBILITY = 'SET_WINDOW_VISIBILITY'
export const UPDATE_LEVEL = 'UPDATE_LEVEL'

// TODO rename map stuff to level

export const setCurrentEntityAction = (entityType) => ({
  type: SET_CURRENT_ENTITY,
  payload: entityType,
})

export const setCurrentTileAction = (tile) => ({
  type: SET_CURRENT_TILE,
  payload: tile,
})

export const setCurrentTool = (tool) => ({
  type: SET_CURRENT_TOOL,
  payload: tool,
})

export const updateLevelAction = (data, levelIndex = 0) => ({
  type: UPDATE_LEVEL,
  payload: { data, levelIndex },
})

export const setMapTileAction = (x, y, tileId, levelIndex = 0) => ({
  type: SET_MAP_TILE,
  payload: { x, y, tileId, levelIndex },
})

export const setMapEntityAction = (x, y, id, levelIndex = 0) => ({
  type: SET_MAP_ENTITY,
  payload: { x, y, id, levelIndex },
})

export const clearMapEntityAction = (x, y, levelIndex = 0) => ({
  type: CLEAR_MAP_ENTITY,
  payload: { x, y, levelIndex },
})

// clear all entities of a certain type from a level
export const clearMapEntitiesAction = (type, levelIndex = 0) => ({
  type: CLEAR_MAP_ENTITIES,
  payload: { type, levelIndex },
})

export const clearMapAction = (levelIndex = 0) => ({
  type: CLEAR_MAP,
  payload: levelIndex,
})

export const resizeMapAction = (width, height, levelIndex = 0) => ({
  type: RESIZE_MAP,
  payload: {
    width,
    height,
    levelIndex,
  },
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

export const setModalVisibilityAction = (modal, visibility) => ({
  type: SET_MODAL_VISIBILITY,
  payload: { modal, visibility },
})
