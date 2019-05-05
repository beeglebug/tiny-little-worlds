import Vector2 from '../geometry/Vector2'
import nearestPointRect from '../closestPointRect'
import collidePointCircle from './collidePointCircle'
import distanceBetween from '../distanceBetween'

const _near = new Vector2()

/**
 * Check collision between a Circle and a Rect
 * @param {Circle} circle
 * @param {Rect} rect
 * @param {CollisionResponse} response
 * @return {boolean} if a collision occurred
 */
export default function collideCircleRect (circle, rect, response = null) {

  nearestPointRect(circle, rect, _near.zero())

  if (!collidePointCircle(_near, circle)) return false

  if (response) {
    const distance = distanceBetween(_near, circle)
    response.position.set(_near.x, _near.y)
    response.normal.set(circle.x, circle.y).subtract(_near).normalize()
    response.depth = circle.radius - distance
  }

  return true
}
