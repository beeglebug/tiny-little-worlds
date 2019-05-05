import Vector2 from '../geometry/Vector2'
import distanceBetween from '../distanceBetween'
import closestPointCircle from '../closestPointCircle'

const _near = new Vector2()

/**
 * Check collision between two Circles
 * @param {Circle} c1
 * @param {Circle} c2
 * @param {CollisionResponse} response
 * @return {boolean} if a collision occurred
 */
export default function collideCircleCircle (c1, c2, response = null) {

  const dx = Math.abs(c1.x - c2.x)
  const dy = Math.abs(c1.y - c2.y)
  const dr = c1.radius + c2.radius

  if (((dx * dx) + (dy * dy)) >= (dr * dr)) return false

  if (response) {
    closestPointCircle(c1, c2, _near)
    const distance = distanceBetween(_near, c1)
    response.position.set(_near.x, _near.y)
    response.normal.set(c1.x, c1.y).subtract(_near).normalize()
    response.depth = c1.radius - distance
  }

  return true
}
