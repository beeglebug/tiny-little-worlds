import { Object3D } from 'three/src/core/Object3D'
import { SpriteMaterial } from 'three/src/materials/SpriteMaterial'
import { Sprite } from 'three/src/objects/Sprite'
import { TILE_SIZE } from './consts'
import Rect from './physics/geometry/Rect'
import Circle from './physics/geometry/Circle'

export default class Entity extends Object3D {

  constructor (props, definition, assets) {
    super()

    this.position.set(
      props.x * TILE_SIZE,
      0,
      props.y * TILE_SIZE
    )

    if (definition.collider) {
      this.collider = createCollider(this.position.x, this.position.z, definition.collider)
      if (definition.collectable) {
        this.collider.trigger = true
      }
    }

    if (definition.mesh) {
      const mesh = assets.meshes[definition.mesh].clone()
      this.add(mesh)
    }

    if (definition.billboard && definition.texture) {
      const map = assets.textures[definition.texture]
      const spriteMaterial = new SpriteMaterial({ map, transparent: true, depthWrite: false })
      const sprite = new Sprite(spriteMaterial)
      // TODO position from json
      sprite.position.set(0, 0.5, 0)
      this.add(sprite)
    }

    if (definition.shadow) {
      // TODO size from json
      const shadow = assets.meshes['shadow-small'].clone()
      shadow.position.set(0, 0.1, 0)
      this.add(shadow)
    }
  }
}

function createCollider (x, y, [ type, ...args ]) {
  switch (type) {
    case 'rect': return createRectCollider(x, y, ...args)
    case 'circle': return createCircleCollider(x, y, ...args)
  }
}

function createRectCollider (x, y, width, height) {
  return new Rect(
    x - (width / 2),
    y - (height / 2),
    width,
    height
  )
}

function createCircleCollider (x, y, radius) {
  return new Circle(x, y, radius)
}
