import { ENTITY_TYPE, TILE_SIZE } from '../consts'
import Entity from '../Entity'

export default function createEntities (map, palette, assets, controller) {

  const entities = []

  map.entities.forEach(instance => {

    const definition = palette.entities.find(({ id }) => id === instance.type)

    if (instance.type === ENTITY_TYPE.PLAYER) {
      // just set player position, nothing to add to world
      // TODO player orientation?
      controller.position.set(instance.x * TILE_SIZE, 0, instance.y * TILE_SIZE)
      return
    }

    const entity = new Entity({ ...definition, ...instance }, assets)
    entities.push(entity)
  })

  return entities
}
