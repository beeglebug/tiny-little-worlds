import CollisionResponse from './physics/collision/CollisionResponse'
import collideCircleRect from './physics/collision/collideCircleRect'
import Rect from './physics/geometry/Rect'
import Circle from './physics/geometry/Circle'
import collideCircleCircle from './physics/collision/collideCircleCircle'

const _response = new CollisionResponse()

class Physics {

  colliders = []

  setColliders (colliders) {
    this.colliders = colliders
  }

  addColliders (colliders) {
    this.colliders.push(...colliders)
  }

  clearColliders () {
    this.colliders = []
  }

  getColliders (player) {
    // TODO filter by player position
    return this.colliders
  }

  collide (target, colliders, onCollision) {
    _response.reset()
    for (const collider of colliders) {
      const collisionFn = getCollisionFn(target, collider)
      if (collisionFn(target, collider, _response)) {
        _response.target = collider
        onCollision(_response)
      }
    }
  }
}

// TODO currently assumes target is always a circle
const getCollisionFn = (target, obstacle) => {
  if (obstacle instanceof Rect) return collideCircleRect
  if (obstacle instanceof Circle) return collideCircleCircle
}

export default new Physics()
