import { TILE_SIZE } from './consts'

export default function findPlayerPosition (map) {

  const TILE_TYPE_PLAYER = 3

  const index = map.data.findIndex(tile => tile === TILE_TYPE_PLAYER)

  const x = (index % map.width) * TILE_SIZE
  const y = Math.floor(index / map.width) * TILE_SIZE

  // convert from 2d [x, y] to 3d [x, y, z]
  return [x, 0, y]
}
