export const selectedEntitySelector = state => state.selectedEntity
export const selectedTileSelector = state => state.selectedTile
export const selectedToolSelector = state => state.selectedTool

export const gameSelector = state => state.game

export const showGridSelector = state => state.showGrid

export const windowVisibilitySelector = (state, window) => {
  if (window) return state.windows[window]
  return state.windows
}

export const modalVisibilitySelector = (state, modal) => {
  if (modal) return state.modals[modal]
  return state.modals
}
