import React, { createRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './MapEditor.css'
import useCanvasWithMousePosition from './hooks/useCanvasWithMousePosition'
import { selectedTileSelector } from './state/selectors'
import { getPositionFromTileIndex } from './util/tileset'

export default function MapEditor ({ map }) {
  const canvasRef = createRef()

  const selectedTile = useSelector(selectedTileSelector)

  const [ctx, mousePosition] = useCanvasWithMousePosition(canvasRef)

  useEffect(() => {
    draw()
  }, [ctx, mousePosition])

  function draw () {
    if (!ctx) return
    const width = map.width * map.tileSize
    const height = map.height * map.tileSize
    const size = map.tileSize
    ctx.fillStyle = '#AAAAAA'
    ctx.fillRect(0, 0, width, height)
    ctx.strokeStyle = '#c9c9c9'
    ctx.translate(0.5, 0.5)

    for (let y = size; y < height; y += size) {
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
    }

    for (let x = size; x < width; x += size) {
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
    }

    ctx.stroke()
    ctx.translate(-0.5, -0.5)

    if (mousePosition) {
      const dx = Math.floor(mousePosition.x / size) * size
      const dy = Math.floor(mousePosition.y / size) * size

      const { tileset } = map
      const [sx, sy] = getPositionFromTileIndex(selectedTile, tileset)

      ctx.drawImage(tileset.image, sx, sy, tileset.tileSize, tileset.tileSize, dx, dy, tileset.tileSize, tileset.tileSize)
    }
  }

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={map.width * map.tileSize}
        height={map.height * map.tileSize}
      />
    </div>
  )
}
