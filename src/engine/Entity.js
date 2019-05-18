import { Object3D } from 'three/src/core/Object3D'
import { SpriteMaterial } from 'three/src/materials/SpriteMaterial'
import { Sprite } from 'three/src/objects/Sprite'
import { TILE_SIZE } from './consts'
import Rect from './physics/geometry/Rect'
import Circle from './physics/geometry/Circle'

export default class Entity extends Object3D {

  constructor (props, assets) {
    super()

    this.position.set(
      props.x * TILE_SIZE,
      0,
      props.y * TILE_SIZE
    )

    if (props.collider) {
      this.collider = createCollider(this.position.x, this.position.z, props.collider)
    }

    if (props.mesh) {
      const mesh = assets.meshes[props.mesh].clone()
      this.add(mesh)
    }

    if (props.billboard && props.texture) {
      const map = assets.textures[props.texture]
      const spriteMaterial = new SpriteMaterial({ map, transparent: true, depthWrite: false })
      const sprite = new Sprite(spriteMaterial)
      sprite.renderOrder = 1
      sprite.center.set(0.5, 0)

      // always scale to match tiles, but multiply by definition
      let scale = TILE_SIZE
      if (props.scale) scale *= props.scale

      sprite.scale.set(scale, scale, scale)
      this.add(sprite)
    }

    if (props.shadow) {
      const shadow = assets.shadows[props.shadow].clone()
      this.add(shadow)
    }
  }

  // pass through to child
  raycast (raycaster, intersects) {
    this.children[0].raycast(raycaster, intersects)
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
