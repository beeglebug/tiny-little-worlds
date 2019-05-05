export default function distanceBetween (v1, v2) {
  const dx = Math.abs(v1.x - v2.x)
  const dy = Math.abs(v1.y - v2.y)
  return Math.sqrt((dx * dx) + (dy * dy))
}
