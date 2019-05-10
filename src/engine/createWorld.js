import { Object3D } from 'three'
import { TILE_SIZE } from './consts'
import Rect from './physics/geometry/Rect'
import Physics from './Physics'

export default function createWorld (game, assets) {

  const world = new Object3D()

  const colliders = []

  const map = game.levels[0]

  for (let y = 0; y < map.height; y++) {
    for (let x = 0; x < map.width; x++) {
      const tile = get(map, x, y)
      const dx = x * TILE_SIZE
      const dy = y * TILE_SIZE
      if (tile === 0) {
        // if any surrounding tiles are solid, make it collidable
        const surroundingTiles = getSurrounding(map, x, y)
        if (surroundingTiles.some(tile => tile === 1)) {
          const collider = makeCollider(dx, dy)
          colliders.push(collider)
        }
        continue
      }

      const mesh = assets[tile].mesh.clone()

      if (tile === 2) {
        const collider = makeCollider(dx, dy)
        colliders.push(collider)
      }
      // 2d to 3d
      mesh.position.set(dx, 0, dy)
      world.add(mesh)
    }
  }

  Physics.setColliders(colliders)

  return world
}

function get (map, x, y) {
  const ix = (y * map.width) + x
  return map.data[ix]
}

const offsets = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]

function getSurrounding (map, x, y) {
  return offsets
    .map(([ox, oy]) => [ox + x, oy + y])
    .filter(([ox, oy]) => (ox >= 0 && ox < map.width && oy >= 0 && oy < map.height))
    .map(([ox, oy]) => get(map, ox, oy))
}

function makeCollider (x, y) {
  return new Rect(
    x - TILE_SIZE / 2,
    y - TILE_SIZE / 2,
    TILE_SIZE,
    TILE_SIZE
  )
}
