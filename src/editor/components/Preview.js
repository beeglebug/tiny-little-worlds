import React, { useRef, useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { gameSelector } from '../state/selectors'
import Engine from '../../engine/Engine'
import styles from './Preview.css'
import Button from './Button'

export default function Preview () {

  const canvasRef = useRef(null)
  const [ running, setRunning ] = useState(false)
  const [ engine, setEngine ] = useState(null)
  const game = useSelector(gameSelector)

  useEffect(() => {
    const engine = new Engine(canvasRef.current)
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

  return (
    <Fragment>
      <canvas
        ref={canvasRef}
        tabIndex={1}
        className={styles.canvas}
        width={320}
        height={180}
      />
      <Button onClick={handlePlay}>{running ? 'pause' : 'play'}</Button>
    </Fragment>
  )
}
