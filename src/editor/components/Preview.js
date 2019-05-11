import React, { useRef, useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { gameSelector } from '../state/selectors'
import Engine from '../../engine/Engine'
import Button from './Button'
import styles from './Preview.css'

export default function Preview () {

  const canvasRef = useRef(null)
  const [ running, setRunning ] = useState(false)
  const [ engine, setEngine ] = useState(null)
  const game = useSelector(gameSelector)

  useLayoutEffect(() => {
    const engine = new Engine(canvasRef.current)
    engine.load(game)
    engine.render()
    setEngine(engine)
  }, [game])

  function handlePlay () {
    setRunning(true)
    engine.load(game)
    engine.start()
    engine.onStop = () => {
      setRunning(false)
    }
  }

  return (
    <div className={styles.container}>
      <canvas
        ref={canvasRef}
        tabIndex={1}
        className={styles.canvas}
        width={320}
        height={180}
      />
      {!running && (
        <div className={styles.overlay}>
          <Button onClick={handlePlay}>{'play'}</Button>
        </div>
      )}
    </div>
  )
}
