import React, { createRef } from 'react'
import styles from './Preview.css'
import { useSelector } from 'react-redux'
import { mapSelector } from './state/selectors'
import { initGame } from '../engine/initGame'

export default function Preview () {
  const canvasRef = createRef()

  const map = useSelector(mapSelector)

  function handlePlay () {
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
      <div className={styles.overlay}>
        <button onClick={handlePlay}>play</button>
      </div>
    </div>
  )
}
