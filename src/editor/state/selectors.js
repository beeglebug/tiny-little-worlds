export const currentEntitySelector = state => state.currentEntity
export const currentTileSelector = state => state.currentTile
export const currentToolSelector = state => state.currentTool

export const selectedEntitySelector = state => {
  if (state.selectedEntity === null) return null
  const level = currentLevelSelector(state)
  return level.entities.find(entity => entity.id === state.selectedEntity)
}

export const currentLevelSelector = state => {
  const game = state.game
  const currentLevel = state.currentLevel
  return game.levels[currentLevel]
}

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
