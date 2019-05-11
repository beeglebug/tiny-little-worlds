export const selectedTileSelector = state => state.selectedTile
export const selectedToolSelector = state => state.selectedTool

export const mapSelector = state => state.map

export const gameSelector = state => state.game

export const showGridSelector = state => state.showGrid

export const currentLevelSelector = state => {
  if (!state.game) return null
  return state.game.levels[0]
}
