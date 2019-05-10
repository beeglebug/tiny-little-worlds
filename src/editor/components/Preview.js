import React, { useRef, useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { mapSelector } from '../state/selectors'
import Game from '../../engine/Game'
import styles from './Preview.css'
import Button from './Button'

export default function Preview () {

  const canvasRef = useRef(null)
  const [ running, setRunning ] = useState(false)
  const [ game, setGame ] = useState(null)
  const map = useSelector(mapSelector)

  useEffect(() => {
    const game = new Game(canvasRef.current)
    setGame(game)
  }, [])

  function handlePlay () {
    setRunning(true)
    game.load(map)
    game.start()
    game.onStop = () => {
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
