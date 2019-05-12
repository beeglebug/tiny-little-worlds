import { TILE_SIZE } from './consts'

export default function findPlayerPosition (game) {



  const x = player.x * TILE_SIZE
  const y = player.y * TILE_SIZE

  // convert from 2d [x, y] to 3d [x, y, z]
  return [x, 0, y]
}
