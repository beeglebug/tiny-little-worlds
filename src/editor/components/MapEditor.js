import React, { useRef, useLayoutEffect, Fragment } from 'react'
import { useStore } from 'react-redux'
import { setShowGridAction } from '../state/actions'
import { showGridSelector } from '../state/selectors'
import Editor from '../canvas/Editor'
import useReduxState from '../hooks/useReduxState'
import styles from './MapEditor.css'

export default function MapEditor () {

  const canvasRef = useRef(null)
  const store = useStore()
  const [ showGrid, setShowGrid ] = useReduxState(showGridSelector, setShowGridAction)

  useLayoutEffect(() => {
    const editor = new Editor(canvasRef.current, store)
    return () => {
      editor.unbindListeners()
    }
  }, [store])

  return (
    <Fragment>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
      />
      <label
        htmlFor={'show-grid'}
        className={styles.checkbox}
      >
        <input
          id={'show-grid'}
          type={'checkbox'}
          checked={showGrid}
          onChange={() => setShowGrid(!showGrid)}
        />
        show grid
      </label>
    </Fragment>
  )
}
