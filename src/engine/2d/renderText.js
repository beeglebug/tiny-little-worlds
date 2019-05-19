import { HEIGHT, WIDTH } from '../consts'

export default function renderText (ctx, text) {

  ctx.fillStyle = '#000000'

  const margin = 20

  const x = margin
  const y = HEIGHT / 2

  ctx.fillRect(
    x, y,
    WIDTH - (2 * margin),
    (HEIGHT / 2) - margin
  )

  ctx.font = '33px m5x7'
  ctx.textBaseline = 'top'
  ctx.fillStyle = '#FFFFFF'

  ctx.fillText(text, x, y)
}
