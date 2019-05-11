import { CLEAR_MAP, SET_GAME, SET_MAP_TILE } from '../actions'
import arrayOf from '../../util/arrayOf'

// TODO handle different levels
function setMapTile (game, action) {
  const { x, y, tileId, levelId } = action.payload
  const level = game.levels.find(level => level.id === levelId)
  const index = (y * level.width) + x
  const data = [...level.data]
  data[index] = tileId
  return {
    ...game,
    levels: [
      {
        ...level,
        data,
      },
    ],
  }
}

// TODO handle different levels
function clearMap (game, action) {
  const levelId = action.payload
  const level = game.levels.find(level => level.id === levelId)
  return {
    ...game,
    levels: [
      {
        ...level,
        data: arrayOf(level.width * level.height, 0),
      },
    ],
  }
}

export default function game (state = null, action) {
  switch (action.type) {
    case SET_GAME: return action.payload
    case SET_MAP_TILE: return setMapTile(state, action)
    case CLEAR_MAP: return clearMap(state, action)
    default: return state
  }
}
