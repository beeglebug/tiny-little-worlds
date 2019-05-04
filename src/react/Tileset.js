import React, { createRef, useEffect } from 'react'
import styles from './Tileset.css'
import useCanvasWithMousePosition from './hooks/useCanvasWithMousePosition'

export default function Tileset ({ tileset }) {
  const canvasRef = createRef()
  const [ctx, mousePosition] = useCanvasWithMousePosition(canvasRef)

  useEffect(() => {
    draw()
  }, [ctx, mousePosition])

  function draw () {
    if (!ctx) return
    const width = tileset.width
    const height = tileset.height
    const size = tileset.tileSize

    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(tileset.image, 0, 0)
    ctx.translate(0.5, 0.5)

    if (mousePosition) {
      const x = Math.floor(mousePosition.x / size) * size
      const y = Math.floor(mousePosition.y / size) * size
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
      />
    </div>
  )
}
