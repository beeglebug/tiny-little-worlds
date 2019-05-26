export const currentEntitySelector = state => state.currentEntity
export const currentTileSelector = state => state.currentTile
export const currentToolSelector = state => state.currentTool

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
