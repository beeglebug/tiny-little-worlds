import { Object3D } from 'three/src/core/Object3D'
import { SpriteMaterial } from 'three/src/materials/SpriteMaterial'
import { Sprite } from 'three/src/objects/Sprite'
import { ENTITY_TYPE, TILE_SIZE } from '../consts'
import Rect from '../physics/geometry/Rect'

export default function createEntities (map, palette, assets, controller) {

  const entities = []
  const colliders = []

  map.entities.forEach(entity => {

    const entityDefinition = palette.entities.find(({ id }) => id === entity.id)
    const x = entity.x * TILE_SIZE
    const y = entity.y * TILE_SIZE

    switch (entity.id) {
      case ENTITY_TYPE.PLAYER:
        // just set player position, nothing to add to world
        // TODO player orientation?
        controller.position.set(entity.x * TILE_SIZE, 0, entity.y * TILE_SIZE)
        break
      case ENTITY_TYPE.DOOR:
        const mesh = assets.meshes[entityDefinition.mesh].clone()
        mesh.position.set(x, 0, y)
        // TODO define this somewhere properly
        const collider = new Rect(
          x - TILE_SIZE / 2,
          y - TILE_SIZE / 4,
          TILE_SIZE,
          TILE_SIZE / 2
        )
        entities.push(mesh)
        colliders.push(collider)
        break
      case ENTITY_TYPE.KEY:
        const key = createKey(assets, entityDefinition, x, y)
        entities.push(key)
        break
    }

  })

  return [ entities, colliders ]
}

function createKey (assets, entityDefinition, x, y) {
  const map = assets.textures[entityDefinition.texture]
  const spriteMaterial = new SpriteMaterial({ map, transparent: true, depthWrite: false })
  const sprite = new Sprite(spriteMaterial)

  const shadow = assets.meshes['shadow-small'].clone()

  sprite.position.set(0, 0.5, 0)
  shadow.position.set(0, 0.1, 0)

  const root = new Object3D()
  root.add(sprite)
  root.add(shadow)

  root.position.set(x, 0, y)

  return root
}
