import React, { useRef, useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { gameSelector } from '../state/selectors'
import Engine from '../../engine/Engine'
import Button from './Button'
import styles from './Preview.css'

export default function Preview () {

  const canvas2DRef = useRef(null)
  const canvas3DRef = useRef(null)
  const [ running, setRunning ] = useState(false)
  const [ engine, setEngine ] = useState(null)
  const game = useSelector(gameSelector)

  useLayoutEffect(() => {
    const engine = new Engine(canvas3DRef.current, canvas2DRef.current)
    setEngine(engine)
  }, [])

  function handlePlay () {
    setRunning(true)
    engine.load(game)
    engine.start()
    engine.onStop = () => {
      setRunning(false)
    }
  }

  // TODO resolution from config
  const width = 320
  const height = 180

  return (
    <div
      className={styles.container}
      style={{ width, height }}
    >
      <canvas
        ref={canvas2DRef}
        className={styles.canvas2d}
        width={width}
        height={height}
      />
      <canvas
        ref={canvas3DRef}
        tabIndex={1}
        className={styles.canvas3d}
        width={width}
        height={height}
      />
      {!running && (
        <div className={styles.overlay}>
          <Button onClick={handlePlay}>{'play'}</Button>
        </div>
      )}
    </div>
  )
}
