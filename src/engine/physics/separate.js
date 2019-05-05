import CollisionResponse from './collision/CollisionResponse'
import collideCircleRect from './collision/collideCircleRect'
import Rect from './geometry/Rect'
import Circle from './geometry/Circle'
import collideCircleCircle from './collision/collideCircleCircle'

const _response = new CollisionResponse()

export default function (target, obstacles) {
  for (const obstacle of obstacles) {
    const collisionFn = getCollisionFn(target, obstacle)
    if (collisionFn(target, obstacle, _response)) {
      const mtd = _response.mtd
      target.x += mtd.x
      target.y += mtd.y
    }
  }
}

// TODO currently assumes target is always a circle
const getCollisionFn = (target, obstacle) => {
  if (obstacle instanceof Rect) return collideCircleRect
  if (obstacle instanceof Circle) return collideCircleCircle
}
