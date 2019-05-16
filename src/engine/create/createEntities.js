import { ENTITY_TYPE, TILE_SIZE } from '../consts'
import Entity from '../Entity'

export default function createEntities (map, palette, assets, controller) {

  const entities = []

  map.entities.forEach(entityData => {

    const entityDefinition = palette.entities.find(({ id }) => id === entityData.id)

    if (entityData.id === ENTITY_TYPE.PLAYER) {
      // just set player position, nothing to add to world
      // TODO player orientation?
      controller.position.set(entityData.x * TILE_SIZE, 0, entityData.y * TILE_SIZE)
      return
    }

    const entity = new Entity(entityData, entityDefinition, assets)
    entities.push(entity)
  })

  return entities
}
