import React, { createRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './MapEditor.css'
import useCanvasWithMousePosition from './hooks/useCanvasWithMousePosition'
import { selectedTileSelector } from './state/selectors'
import { getPositionFromTileIndex } from './util/tileset'

export default function MapEditor ({ map, backgroundColor = '#7a7a7a', gridColor = '#959595' }) {
  const canvasRef = createRef()

  const selectedTile = useSelector(selectedTileSelector)

  const [ctx, mousePosition] = useCanvasWithMousePosition(canvasRef)

  useEffect(() => {
    draw()
  }, [ctx, mousePosition])

  function handleClick () {
    // const size = map.tileSize
    // const x = Math.floor(mousePosition.x / size) * size
    // const y = Math.floor(mousePosition.y / size) * size
  }

  function draw () {
    if (!ctx) return
    const width = map.width * map.tileSize
    const height = map.height * map.tileSize
    const size = map.tileSize
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, width, height)

    drawTiles(ctx, map)

    drawGrid(ctx, width, height, size, gridColor)

    if (mousePosition) {
      const x = Math.floor(mousePosition.x / size) * size
      const y = Math.floor(mousePosition.y / size) * size
      drawCursor(ctx, x, y, selectedTile, map.tileset)
    }
  }

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={map.width * map.tileSize}
        height={map.height * map.tileSize}
        onClick={handleClick}
      />
    </div>
  )
}


function drawGrid (ctx, width, height, size, gridColor) {

  ctx.translate(0.5, 0.5)
  ctx.strokeStyle = gridColor

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
}

function drawCursor (ctx, dx, dy, selectedTile, tileset) {

  const [sx, sy] = getPositionFromTileIndex(selectedTile, tileset)

  ctx.drawImage(tileset.image, sx, sy, tileset.tileSize, tileset.tileSize, dx, dy, tileset.tileSize, tileset.tileSize)
}

function drawTiles (ctx, map) {
  for (let y = 0; y < map.height; y++) {
    for (let x = 0; x < map.width; x++) {
      const ix = (y * map.width) + x
      const tile = map.data[ix]
      if (tile === 0) continue
      const dx = x * map.tileSize
      const dy = y * map.tileSize
      const [sx, sy] = getPositionFromTileIndex(tile, map.tileset)
      ctx.drawImage(
        map.tileset.image,
        sx,
        sy,
        map.tileset.tileSize,
        map.tileset.tileSize,
        dx,
        dy,
        map.tileSize,
        map.tileSize
      )
    }
  }
}
