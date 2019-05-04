export const SELECT_TILE = 'SELECT_TILE'
export const SET_MAP_TILE = 'SET_MAP_TILE'

export const selectTileAction = (tile) => ({
  type: SELECT_TILE,
  payload: { tile }
})

export const setMapTileAction = (x, y, tile) => ({
  type: SET_MAP_TILE,
  payload: { x, y, tile }
})
