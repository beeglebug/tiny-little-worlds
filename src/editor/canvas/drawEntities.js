import { SIZE } from '../consts'

export default function drawEntities (ctx, map, assets) {

  map.entities.forEach(entity => {

    const { x, y, type } = entity

    const dx = x * SIZE
    const dy = y * SIZE

    const image = assets[type]

    if (!image) return

    ctx.drawImage(
      image,
      dx,
      dy,
      SIZE,
      SIZE
    )

  })
}
