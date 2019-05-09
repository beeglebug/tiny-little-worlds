import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './MapEditor.css'
import useCanvasWithMouse from '../hooks/useCanvasWithMouse'
import { mapSelector, selectedTileSelector, selectedToolSelector } from '../state/selectors'
import { getPositionFromTileIndex } from '../util/tileset'
import { setMapTileAction } from '../state/actions'
import { TOOLS } from '../consts'
import Window from './Window'

const SIZE = 16

export default function MapEditor ({ tileset, backgroundColor = '#7a7a7a', gridColor = '#454545' }) {

  const canvasRef = useRef(null)
  const dispatch = useDispatch()
  const selectedTile = useSelector(selectedTileSelector)
  const map = useSelector(mapSelector)
  const selectedTool = useSelector(selectedToolSelector)
  const [ currentTileIndex, setCurrentTileIndex ] = useState(null)
  const [ctx, mousePosition, mouseDown] = useCanvasWithMouse(canvasRef)
  const [ grid, setGrid ] = useState(true)

  useEffect(() => {
    draw()
  }, [ctx, map, mousePosition, grid])

  function handleMouseDown () {
    if (selectedTool === TOOLS.INSPECT) {
      console.log(1)
    } else {
      paintCurrentMapTile()
    }
  }

  function handleMouseMove () {
    const x = Math.floor(mousePosition.x / SIZE)
    const y = Math.floor(mousePosition.y / SIZE)
    const index = (y * map.width) + x
    if (mouseDown && currentTileIndex !== index) {
      paintCurrentMapTile()
    }
    setCurrentTileIndex(index)
  }

  function paintCurrentMapTile () {
    let tile
    if (selectedTool === TOOLS.PAINT) {
      tile = selectedTile
    } else if (selectedTool === TOOLS.ERASE) {
      tile = 0
    }
    const x = Math.floor(mousePosition.x / SIZE)
    const y = Math.floor(mousePosition.y / SIZE)
    dispatch(setMapTileAction(x, y, tile))
  }

  function draw () {
    if (!ctx) return
    const width = map.width * SIZE
    const height = map.height * SIZE
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, width, height)
    drawTiles(ctx, map, tileset)
    if (grid) {
      drawGrid(ctx, width, height, gridColor)
    }
    if (mousePosition) {
      const x = Math.floor(mousePosition.x / SIZE) * SIZE
      const y = Math.floor(mousePosition.y / SIZE) * SIZE
      drawCursor(ctx, x, y, selectedTile, selectedTool, map, tileset)
    }
  }

  return (
    <Window title={'edit level'}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={map.width * map.tileSize}
        height={map.height * map.tileSize}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      />
      <label htmlFor={'show-grid'}>
        <input
          id={'show-grid'}
          type={'checkbox'}
          checked={grid}
          onChange={() => setGrid(!grid)}
        />
        show grid
      </label>
    </Window>
  )
}

function drawGrid (ctx, width, height, gridColor) {

  ctx.translate(0.5, 0.5)
  ctx.strokeStyle = gridColor

  for (let y = SIZE; y < height; y += SIZE) {
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
  }

  for (let x = SIZE; x < width; x += SIZE) {
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
  }

  ctx.stroke()
  ctx.translate(-0.5, -0.5)
}

function drawCursor (ctx, dx, dy, selectedTile, selectedTool, map, tileset) {

  const [sx, sy] = getPositionFromTileIndex(selectedTile, tileset)

  if (selectedTool === TOOLS.PAINT) {
    ctx.drawImage(tileset.image, sx, sy, SIZE, SIZE, dx, dy, tileset.tileSize, tileset.tileSize)
  }

  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
  ctx.fillRect(dx, dy, SIZE, SIZE)
}

function drawTiles (ctx, map, tileset) {
  for (let y = 0; y < map.height; y++) {
    for (let x = 0; x < map.width; x++) {
      const ix = (y * map.width) + x
      const tile = map.data[ix]
      if (tile === 0) continue
      const dx = x * SIZE
      const dy = y * SIZE
      const [sx, sy] = getPositionFromTileIndex(tile, tileset)
      ctx.drawImage(
        tileset.image,
        sx,
        sy,
        tileset.tileSize,
        tileset.tileSize,
        dx,
        dy,
        SIZE,
        SIZE
      )
    }
  }
}
