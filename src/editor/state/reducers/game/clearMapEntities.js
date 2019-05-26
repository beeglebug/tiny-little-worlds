export default function clearMapEntities (state, action) {

  const { type, levelIndex } = action.payload

  const level = state.levels[levelIndex]

  const entities = level.entities.filter(entity => entity.type !== type)

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
