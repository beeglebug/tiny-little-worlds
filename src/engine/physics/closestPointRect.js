import Vector2 from './geometry/Vector2'

/**
 * Determine the closest point on a rect to another point
 * @param {Vector2|Circle} point
 * @param {Rect} rect
 * @param {Vector2} output
 * @return
 */
export default function closestPointRect (point, rect, output = new Vector2()) {

  if (point.x < rect.x) {
    output.x = rect.x
  } else if (point.x > rect.x + rect.width) {
    output.x = rect.x + rect.width
  } else {
    output.x = point.x
  }

  if (point.y < rect.y) {
    output.y = rect.y
  } else if (point.y > rect.y + rect.height) {
    output.y = rect.y + rect.height
  } else {
    output.y = point.y
  }

  return output
}
