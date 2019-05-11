import { SIZE, TOOLS } from '../consts'

export default function drawCursor (ctx, dx, dy, selectedTile, selectedTool, assets) {

  if (selectedTool === TOOLS.PAINT) {
    const image = assets[selectedTile]
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
