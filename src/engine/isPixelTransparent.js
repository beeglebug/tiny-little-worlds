/**
 * Check for a transparent pixel at a given coordinate
 * @param uv
 * @param map
 * @returns {boolean}
 */
export default function isPixelTransparent (uv, map) {

  if (!map) return false

  const { width, height } = map.image

  if (!map.raycastCache) {
    map.raycastCache = generateCache(map.image)
  }

  const x = Math.floor(width * uv.x)
  const y = Math.floor(height * (1 - uv.y))

  const ix = (y * width) + x

  return map.raycastCache[ix] === 0
}

/**
 * Cache the alpha values the first time
 * @param image
 * @returns {Array}
 */
function generateCache (image) {

  const { width, height } = image

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')

  ctx.drawImage(image, 0, 0)

  const data = ctx.getImageData(0, 0, width, height).data

  // store just the alpha values
  const cache = []

  for (let i = 3; i < data.length; i += 4) {
    cache.push(data[i])
  }

  return cache
}
