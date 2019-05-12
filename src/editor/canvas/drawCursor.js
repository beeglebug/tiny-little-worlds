import { SIZE, TOOLS } from '../consts'

export default function drawCursor (ctx, dx, dy, selectedEntity, selectedTile, selectedTool, assets) {

  if (selectedTool === TOOLS.PAINT) {

    let image

    if (selectedTile) {
      image = assets[selectedTile]
    } else if (selectedEntity) {
      image = assets[selectedEntity]
    }

    if (!image) return

    ctx.drawImage(
      image,
      dx,
      dy,
      SIZE,
      SIZE
    )
  }

  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
  ctx.fillRect(dx, dy, SIZE, SIZE)
}