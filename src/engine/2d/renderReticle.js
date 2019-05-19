import { HEIGHT, WIDTH } from '../consts'

// TODO improve reticle
export default function renderReticle (ctx, controller) {

  const size = 4

  ctx.fillStyle = controller.interactionTarget ? '#d23f00' : '#FFFFFF'

  ctx.fillRect(
    (WIDTH / 2) - (size / 2),
    (HEIGHT / 2) - (size / 2),
    size,
    size
  )
}
