import React, { createRef, useEffect } from 'react'
import styles from './Tileset.css'
import useCanvasWithMousePosition from './hooks/useCanvasWithMousePosition'
import { useDispatch, useSelector } from 'react-redux'
import { selectTileAction } from './state/actions'
import { selectedTileSelector } from './state/selectors'

export default function Tileset ({ tileset }) {
  const canvasRef = createRef()
  const [ctx, mousePosition] = useCanvasWithMousePosition(canvasRef)

  const dispatch = useDispatch()
  const selectedTile = useSelector(selectedTileSelector)

  useEffect(() => {
    draw()
  }, [ctx, selectedTile])

  function handleClick (e) {
    const tile = getTileIndexFromPosition(mousePosition, tileset)
    dispatch(selectTileAction(tile))
  }

  function draw () {
    if (!ctx) return
    const width = tileset.width
    const height = tileset.height
    const size = tileset.tileSize

    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(tileset.image, 0, 0)
    ctx.translate(0.5, 0.5)

    if (selectedTile !== null) {
      const [x, y] = getPositionFromTileIndex(selectedTile, tileset)
      ctx.strokeStyle = '#FFFFFF'
      ctx.strokeRect(x, y, size, size)
    }

    ctx.translate(-0.5, -0.5)
  }

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width={tileset.width}
        height={tileset.height}
        onClick={handleClick}
      />
    </div>
  )
}

function getTileIndexFromPosition (mousePosition, tileset) {
  const columns = tileset.width / tileset.tileSize
  const x = Math.floor(mousePosition.x / tileset.tileSize)
  const y = Math.floor(mousePosition.y / tileset.tileSize)
  return (y * columns) + x
}

function getPositionFromTileIndex (index, tileset) {
  const columns = tileset.width / tileset.tileSize
  const x = (index % columns) * tileset.tileSize
  const y = Math.floor(index / columns) * tileset.tileSize
  return [x, y]
}
