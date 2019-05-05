/**
 * calculate collision between a point and a Circle
 * @param {Vector2} point
 * @param {Circle} circle
 * @return {boolean} if the point is inside the circle
 */
export default function collidePointCircle (point, circle) {

  const dx = Math.abs(circle.x - point.x)
  const dy = Math.abs(circle.y - point.y)

  return (dx * dx) + (dy * dy) < (circle.radius * circle.radius)
}
