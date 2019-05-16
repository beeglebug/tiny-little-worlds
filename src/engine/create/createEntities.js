import { SpriteMaterial } from 'three/src/materials/SpriteMaterial'
import { Sprite } from 'three/src/objects/Sprite'
import { ENTITY_TYPE, TILE_SIZE } from '../consts'
import Rect from '../physics/geometry/Rect'
import Circle from '../physics/geometry/Circle'
import Entity from '../Entity'

export default function createEntities (map, palette, assets, controller) {

  const entities = []

  map.entities.forEach(entityData => {

    const entityDefinition = palette.entities.find(({ id }) => id === entityData.id)

    let entity

    // TODO make all this via props from config
    switch (entityData.id) {

      case ENTITY_TYPE.PLAYER:

        // just set player position, nothing to add to world
        // TODO player orientation?
        controller.position.set(entityData.x * TILE_SIZE, 0, entityData.y * TILE_SIZE)
        break

      case ENTITY_TYPE.DOOR:

        entity = new Entity(entityData)
        const mesh = assets.meshes[entityDefinition.mesh].clone()

        // TODO define this somewhere properly
        entity.collider = new Rect(
          (entityData.x * TILE_SIZE) - TILE_SIZE / 2,
          (entityData.y * TILE_SIZE) - TILE_SIZE / 4,
          TILE_SIZE,
          TILE_SIZE / 2
        )

        entity.add(mesh)

        entities.push(entity)
        break

      case ENTITY_TYPE.KEY:

        entity = new Entity(entityData)

        const map = assets.textures[entityDefinition.texture]
        const spriteMaterial = new SpriteMaterial({ map, transparent: true, depthWrite: false })
        const sprite = new Sprite(spriteMaterial)

        const shadow = assets.meshes['shadow-small'].clone()

        sprite.position.set(0, 0.5, 0)
        shadow.position.set(0, 0.1, 0)

        entity.add(sprite)
        entity.add(shadow)

        const collider = new Circle(
          entityData.x * TILE_SIZE,
          entityData.y * TILE_SIZE,
          TILE_SIZE / 4
        )
        collider.trigger = true

        entity.collider = collider

        entities.push(entity)
        break
    }

  })

  return entities
}
