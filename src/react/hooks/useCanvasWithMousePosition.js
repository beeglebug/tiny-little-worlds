import { useState, useEffect } from 'react'

export default function useCanvasWithMousePosition (canvasRef) {

  const [ ctx, setCtx ] = useState(null)
  const [ rect, setRect ] = useState(null)
  const [ mousePosition, setMousePosition ] = useState(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    setCtx(ctx)
    setRect(canvas.getBoundingClientRect())
  }, [canvasRef.current])

  useEffect(() => {
    const canvas = canvasRef.current
    function handleMouseMove (e) {
      const mousePosition = {
        x: e.clientX - rect.x,
        y: e.clientY - rect.y,
      }
      setMousePosition(mousePosition)
    }

    function handleMouseLeave () {
      setMousePosition(null)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [canvasRef.current, rect])

  return [ctx, mousePosition]
}
