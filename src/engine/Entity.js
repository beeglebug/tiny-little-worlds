import { Object3D } from 'three/src/core/Object3D'
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial'
import { TILE_SIZE } from './consts'
import Rect from './physics/geometry/Rect'
import Circle from './physics/geometry/Circle'
import isPixelTransparent from './isPixelTransparent'

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
    this.dialogue = props.dialogue || null
  }

  // pass through to child
  raycast (raycaster, intersects) {

    // hack because raycaster does not return anything it just adds the intersection to the intersects array
    const preCount = intersects.length

    const mesh = this.children[0]

    mesh.raycast(raycaster, intersects)

    const postCount = intersects.length

    if (postCount > preCount) {
      const intersection = intersects[intersects.length - 1]
      if (this.isCameraFacing) {
        const isTransparentPixel = isPixelTransparent(intersection.uv, mesh.material.map)
        // remove the intersection
        if (isTransparentPixel) {
          intersects.pop()
        }
      }
    }
  }

  update (engine) {
    if (this.isCameraFacing) {
      this.children[0].rotation.y = Math.PI + engine.controller.rotation.y
    }
  }

  interact (source) {
    if (this.dialogue) {
      // TODO global (probably redux)
      // Dialogue.show(this.dialogue)
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
