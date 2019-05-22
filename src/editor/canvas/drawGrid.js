import { SIZE } from '../consts'

export default function drawGrid (ctx, width, height, gridColor) {

  ctx.translate(0.5, 0.5)
  ctx.beginPath()
  ctx.strokeStyle = gridColor

  for (let y = SIZE; y <= height; y += SIZE) {
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
  }

  for (let x = SIZE; x <= width; x += SIZE) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
  }

  ctx.stroke()
  ctx.closePath()
  ctx.translate(-0.5, -0.5)
}
