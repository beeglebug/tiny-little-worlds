import React, { createRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './MapEditor.css'
import useCanvasWithMousePosition from './hooks/useCanvasWithMousePosition'
import { selectedTileSelector } from './state/selectors'

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
    ctx.fillStyle = '#e9f0fc'
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
      const x = Math.floor(mousePosition.x / size) * size
      const y = Math.floor(mousePosition.y / size) * size
      ctx.fillStyle = '#FF0000'
      ctx.fillRect(x, y, size, size)
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
