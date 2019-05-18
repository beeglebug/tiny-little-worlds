import { Object3D } from 'three/src/core/Object3D'
import Physics from './Physics'
import createTiles from './create/createTiles'
import createEntities from './create/createEntities'

export default function createWorld (game, assets, controller) {

  Physics.clearColliders()

  const world = new Object3D()

  // TODo more than first level
  const map = game.levels[0]
  const palette = game.palettes[map.palette]

  // TODO split collider stuff out
  const [ tiles, tileColliders ] = createTiles(map, palette, assets)

  if (tiles.length) world.add(...tiles)

  Physics.addColliders(tileColliders)

  const entities = createEntities(map, palette, assets, controller)

  if (entities.length) world.add(...entities)

  const colliders = entities
    .filter(entity => entity.collider)
    .map(entity => entity.collider)

  Physics.addColliders(colliders)

  return world
}
