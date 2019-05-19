import { Object3D } from 'three/src/core/Object3D'
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial'
import { TILE_SIZE } from './consts'
import Rect from './physics/geometry/Rect'
import Circle from './physics/geometry/Circle'

// TODO split into two classes for billboard / mesh
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
      const sprite = assets.meshes.sprite.clone()
      sprite.material = new MeshBasicMaterial({ map, transparent: true, depthWrite: false })
      sprite.renderOrder = 1

      if (props.scale) {
        sprite.scale.set(props.scale, props.scale, props.scale)
      }

      this.isCameraFacing = true
      this.add(sprite)
    }

    if (props.shadow) {
      const shadow = assets.shadows[props.shadow].clone()
      this.add(shadow)
    }

    this.interactive = Boolean(props.interactive)
  }

  // pass through to child
  raycast (raycaster, intersects) {
    this.children[0].raycast(raycaster, intersects)
  }

  update (engine) {
    if (this.isCameraFacing) {
      this.children[0].rotation.y = Math.PI + engine.controller.rotation.y
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
