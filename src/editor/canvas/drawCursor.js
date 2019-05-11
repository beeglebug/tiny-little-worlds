import { getPositionFromTileIndex } from '../util/tileset'
import { SIZE, TOOLS } from '../consts'

export default function drawCursor (ctx, dx, dy, selectedTile, selectedTool, map, tileset) {

  const [sx, sy] = getPositionFromTileIndex(selectedTile, tileset)

  if (selectedTool === TOOLS.PAINT) {
    ctx.drawImage(tileset.image, sx, sy, SIZE, SIZE, dx, dy, tileset.tileSize, tileset.tileSize)
  }

  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
  ctx.fillRect(dx, dy, SIZE, SIZE)
}
