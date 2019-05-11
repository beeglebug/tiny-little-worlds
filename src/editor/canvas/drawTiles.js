import { SIZE } from '../consts'

export default function drawTiles (ctx, map, assets) {

  for (let y = 0; y < map.height; y++) {

    for (let x = 0; x < map.width; x++) {

      const ix = (y * map.width) + x
      const tileId = map.data[ix]

      if (tileId === 0) continue

      const dx = x * SIZE
      const dy = y * SIZE

      const image = assets[tileId]

      ctx.drawImage(
        image,
        dx,
        dy,
        SIZE,
        SIZE
      )
    }
  }
}
