import React, { useRef, useEffect, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useCanvasWithMouse from '../hooks/useCanvasWithMouse'
import { gameSelector, selectedTileSelector, selectedToolSelector } from '../state/selectors'
import { setMapTileAction } from '../state/actions'
import { SIZE, TOOLS } from '../consts'
import styles from './MapEditor.css'
import drawGrid from '../canvas/drawGrid'
import drawCursor from '../canvas/drawCursor'
import drawTiles from '../canvas/drawTiles'
import loadImage from '../util/loadImage'

export default function MapEditor ({ backgroundColor = '#deecff', gridColor = '#ffffff' }) {

  const canvasRef = useRef(null)
  const dispatch = useDispatch()
  const selectedTile = useSelector(selectedTileSelector)
  const game = useSelector(gameSelector)
  const selectedTool = useSelector(selectedToolSelector)
  const [ currentTileIndex, setCurrentTileIndex ] = useState(null)
  const [ctx, mousePosition, mouseDown] = useCanvasWithMouse(canvasRef)
  const [ showGrid, setShowGrid ] = useState(true)
  const [ assets, setAssets ] = useState(null)

  const map = game.levels[0]
  const palette = game.palettes[0]

  useEffect(() => {
    const { tiles } = palette
    Promise
      .all(tiles.map(tile => loadImage(`/assets/games/${game.id}/assets/${tile.sprite}`)))
      .then(loaded => {
        const assets = tiles.reduce((byId, tile, ix) => {
          byId[tile.id] = loaded[ix]
          return byId
        }, {})
        setAssets(assets)
      })
  }, [game.id, palette])

  useEffect(() => {

    if (!ctx) return
    if (!assets) return

    const width = map.width * SIZE
    const height = map.height * SIZE
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, width, height)

    drawTiles(ctx, map, assets)

    if (showGrid) {
      drawGrid(ctx, width, height, gridColor)
    }

    if (mousePosition) {
      const x = Math.floor(mousePosition.x / SIZE) * SIZE
      const y = Math.floor(mousePosition.y / SIZE) * SIZE
      // drawCursor(ctx, x, y, selectedTile, selectedTool, map, tileset)
    }

  }, [ctx, assets, map, palette, mousePosition, showGrid, gridColor])

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

  return (
    <Fragment>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={map.width * SIZE}
        height={map.height * SIZE}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      />
      <label
        htmlFor={'show-grid'}
        className={styles.checkbox}
      >
        <input
          id={'show-grid'}
          type={'checkbox'}
          checked={showGrid}
          onChange={() => setShowGrid(!showGrid)}
        />
        show grid
      </label>
    </Fragment>
  )
}
