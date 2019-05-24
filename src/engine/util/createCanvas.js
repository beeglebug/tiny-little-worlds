export default function createCanvas (width, height) {

  const canvas = document.createElement('canvas')

  canvas.style.imageRendering = 'pixelated'
  canvas.style.position = 'absolute'
  canvas.style.top = 0
  canvas.style.left = 0
  canvas.style.display = 'block'
  canvas.width = width
  canvas.height = height

  return canvas
}
