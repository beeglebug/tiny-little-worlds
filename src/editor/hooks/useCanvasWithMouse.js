import { useState, useEffect } from 'react'

export default function useCanvasWithMouse (canvasRef) {

  const [ ctx, setCtx ] = useState(null)
  const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 })
  const [ mouseDown, setMouseDown ] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    setCtx(ctx)
  }, [canvasRef.current])

  useEffect(() => {
    const canvas = canvasRef.current
    function handleMouseMove (e) {
      const rect = canvas.getBoundingClientRect()
      const mousePosition = {
        x: e.pageX - rect.x,
        y: e.pageY - rect.y,
      }
      setMousePosition(mousePosition)
    }

    function handleMouseLeave () {
      setMousePosition(null)
      setMouseDown(false)
    }

    function handleMouseDown () {
      setMouseDown(true)
    }

    function handleMouseUp () {
      setMouseDown(false)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mouseup', handleMouseUp)

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mouseup', handleMouseUp)
    }
  }, [canvasRef.current])

  return [ctx, mousePosition, mouseDown]
}
