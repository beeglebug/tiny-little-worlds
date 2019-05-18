export default function clearMapEntities (state, action) {

  const { entityId, levelIndex } = action.payload

  const level = state.levels[levelIndex]

  const entities = level.entities.filter(entity => entity.id !== entityId)

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
