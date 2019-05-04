import React, { createRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './MapEditor.css'
import useCanvasWithMousePosition from './hooks/useCanvasWithMousePosition'
import { mapSelector, selectedTileSelector } from './state/selectors'
import { getPositionFromTileIndex } from './util/tileset'
import { setMapTileAction } from './state/actions'

export default function MapEditor ({ tileset, backgroundColor = '#7a7a7a', gridColor = '#959595' }) {
  const canvasRef = createRef()

  const dispatch = useDispatch()
  const selectedTile = useSelector(selectedTileSelector)
  const map = useSelector(mapSelector)

  const [ctx, mousePosition] = useCanvasWithMousePosition(canvasRef)

  useEffect(() => {
    draw()
  }, [ctx, mousePosition])

  function handleClick () {
    const size = map.tileSize
    const x = Math.floor(mousePosition.x / size)
    const y = Math.floor(mousePosition.y / size)
    dispatch(setMapTileAction(x, y, selectedTile))
  }

  function draw () {
    if (!ctx) return
    const width = map.width * map.tileSize
    const height = map.height * map.tileSize
    const size = map.tileSize
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, width, height)

    drawTiles(ctx, map, tileset)

    drawGrid(ctx, width, height, size, gridColor)

    if (mousePosition) {
      const x = Math.floor(mousePosition.x / size) * size
      const y = Math.floor(mousePosition.y / size) * size
      drawCursor(ctx, x, y, selectedTile, map, tileset)
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

function drawCursor (ctx, dx, dy, selectedTile, map, tileset) {

  const [sx, sy] = getPositionFromTileIndex(selectedTile, tileset)

  ctx.drawImage(tileset.image, sx, sy, map.tileSize, map.tileSize, dx, dy, tileset.tileSize, tileset.tileSize)

  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
  ctx.fillRect(dx, dy, map.tileSize, map.tileSize)
}

function drawTiles (ctx, map, tileset) {
  for (let y = 0; y < map.height; y++) {
    for (let x = 0; x < map.width; x++) {
      const ix = (y * map.width) + x
      const tile = map.data[ix]
      if (tile === 0) continue
      const dx = x * map.tileSize
      const dy = y * map.tileSize
      const [sx, sy] = getPositionFromTileIndex(tile, tileset)
      ctx.drawImage(
        tileset.image,
        sx,
        sy,
        tileset.tileSize,
        tileset.tileSize,
        dx,
        dy,
        map.tileSize,
        map.tileSize
      )
    }
  }
}
