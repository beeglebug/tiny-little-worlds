import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { mapSelector } from './state/selectors'
import { initGame } from '../engine/initGame'
import styles from './Preview.css'

export default function Preview () {

  const canvasRef = useRef(null)
  const [ running, setRunning ] = useState(false)
  const map = useSelector(mapSelector)

  function handlePlay () {
    setRunning(true)
    initGame(canvasRef.current, map)
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
          <button onClick={handlePlay}>play</button>
        </div>
      )}
    </div>
  )
}
