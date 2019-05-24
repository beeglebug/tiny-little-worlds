import React, { useRef, useState, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { gameSelector } from '../state/selectors'
import Engine from '../../engine/Engine'
import Button from './Button'
import styles from './Preview.css'

export default function Preview () {

  const gameContainer = useRef(null)
  const [ running, setRunning ] = useState(false)
  const [ engine, setEngine ] = useState(null)
  const game = useSelector(gameSelector)

  // TODO resolution from config
  const width = 320
  const height = 180

  useLayoutEffect(() => {
    const engine = new Engine(gameContainer.current, width, height)
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
    <div
      className={styles.container}
      style={{ width, height }}
    >
      <div ref={gameContainer} />
      {!running && (
        <div className={styles.overlay}>
          <Button onClick={handlePlay}>{'play'}</Button>
        </div>
      )}
    </div>
  )
}
