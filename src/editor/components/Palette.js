import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useCanvasWithMouse from '../hooks/useCanvasWithMouse'
import { selectTileAction, selectToolAction } from '../state/actions'
import { selectedTileSelector, selectedToolSelector } from '../state/selectors'
import { getPositionFromTileIndex, getTileIndexFromPosition } from '../util/tileset'
import { TOOLS } from '../consts'
import Window from './Window'
import styles from './Palette.css'

export default function Palette ({ tileset }) {

  const canvasRef = useRef(null)
  const [ctx, mousePosition] = useCanvasWithMouse(canvasRef)
  const dispatch = useDispatch()
  const selectedTile = useSelector(selectedTileSelector)
  const selectedTool = useSelector(selectedToolSelector)

  useEffect(() => {
    draw()
  }, [ctx, selectedTile])

  function handleClick () {
    const tile = getTileIndexFromPosition(mousePosition, tileset)
    dispatch(selectTileAction(tile))
    // reset tool selection
    if (selectedTool !== TOOLS.PAINT) {
      dispatch(selectToolAction(TOOLS.PAINT))
    }
  }

  function draw () {
    if (!ctx) return
    const width = tileset.width
    const height = tileset.height
    const size = tileset.tileSize

    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(tileset.image, 0, 0)

    ctx.translate(0.5, 0.5)

    const [x, y] = getPositionFromTileIndex(selectedTile, tileset)
    ctx.strokeStyle = '#FFFFFF'
    ctx.strokeRect(x, y, size, size)

    ctx.translate(-0.5, -0.5)
  }

  return (
    <Window title={'palette'}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={tileset.width}
        height={tileset.height}
        onClick={handleClick}
      />
    </Window>
  )
}
