export default function clearMapEntities (state, action) {

  const { entityId, levelId } = action.payload

  const levelIndex = state.levels.findIndex(level => level.id === levelId)
  const level = state.levels[levelIndex]

  const entities = level.entities.filter(entity => entity.id === entityId)

  const levels = [...state.levels]
  levels[levelIndex] = {
    ...level,
    entities,
  }

  return {
    ...state,
    levels,
  }
}
