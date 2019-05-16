export const selectedEntitySelector = state => state.selectedEntity
export const selectedTileSelector = state => state.selectedTile
export const selectedToolSelector = state => state.selectedTool

export const mapSelector = state => state.map

export const gameSelector = state => state.game

export const showGridSelector = state => state.showGrid

export const currentLevelSelector = state => {
  if (!state.game) return null
  return state.game.levels[0]
}

export const windowVisibilitySelector = (state, window) => {
  if (window) return state.windows[window]
  return state.windows
}
