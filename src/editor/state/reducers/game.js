import { CLEAR_MAP, SET_GAME, SET_MAP_TILE } from '../actions'
import arrayOf from '../../util/arrayOf'

function setMapTile (map, { x, y, tile }) {
  const data = [...map.data]
  const ix = (y * map.width) + x
  data[ix] = tile
  return {
    ...map,
    data
  }
}

// TODO handle different levels
function clearMap (game, action) {
  const levelIx = action.payload
  const level = game.levels[levelIx]
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
    case SET_MAP_TILE: return setMapTile(state, action.payload)
    case CLEAR_MAP: return clearMap(state, action)
    default: return state
  }
}
