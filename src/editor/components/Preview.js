import React, { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { mapSelector } from '../state/selectors'
import Game from '../../engine/Game'
import Window from './Window'
import styles from './Preview.css'

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
    game.start(map)
    game.onStop = () => {
      setRunning(false)
    }
  }

  return (
    <Window title={'Preview'}>
      <canvas
        ref={canvasRef}
        tabIndex={1}
        className={styles.canvas}
        width={320}
        height={180}
      />
      <button onClick={handlePlay}>{running ? 'pause' : 'play'}</button>
    </Window>
  )
}
