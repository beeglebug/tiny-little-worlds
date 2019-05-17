import { NearestFilter } from 'three/src/constants'
import { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial'
import { Mesh } from 'three/src/objects/Mesh'
import { CanvasTexture } from 'three/src/textures/CanvasTexture'

export default function createShadow (size, geometry) {

  const canvas = drawShadow(16, 16 * size)
  const map = new CanvasTexture(canvas)

  map.magFilter = NearestFilter
  map.minFilter = NearestFilter

  const material = new MeshBasicMaterial({
    map,
    opacity: 0.3,
    transparent: true,
  })

  const shadow = new Mesh(geometry, material)

  // just off the floor
  shadow.position.set(0, 0.01, 0)

  return shadow
}

function drawShadow (textureSize, shadowSize) {

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = textureSize
  canvas.height = textureSize

  ctx.fillStyle = '#000000'
  ctx.beginPath()
  ctx.arc(textureSize / 2, textureSize / 2, shadowSize / 2, 0, 2 * Math.PI)
  ctx.fill()

  snapAlpha(ctx, canvas)

  return canvas
}

function snapAlpha (ctx, canvas) {

  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)

  const threshold = 245

  for (let i = 3; i < imgData.data.length; i += 4) {
    // snap alpha to 0 or 255
    imgData.data[i] = imgData.data[i] < threshold ? 0 : 255
  }

  ctx.putImageData(imgData, 0, 0)
}
