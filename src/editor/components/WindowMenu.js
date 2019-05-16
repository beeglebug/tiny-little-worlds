import React, { useState, useRef } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'
import useReduxState from '../hooks/useReduxState'
import { windowVisibilitySelector } from '../state/selectors'
import { setWindowVisibilityAction } from '../state/actions'
import styles from './WindowMenu.css'

export default function WindowMenu () {

  const ref = useRef()
  const [ isOpen, setIsOpen ] = useState(false)
  const [ windowVisibility, setWindowVisibility ] = useReduxState(windowVisibilitySelector, setWindowVisibilityAction)

  const handleClose = () => setIsOpen(false)
  const handleToggle = () => setIsOpen(!isOpen)
  const handleOpenWindow = window => {
    setWindowVisibility(window, true)
    setIsOpen(false)
  }

  useOnClickOutside(ref, handleClose)

  return (
    <div ref={ref}>
      <button onClick={handleToggle}>Windows</button>
      {isOpen && (
        <div className={styles.menu}>
          <div>
            <button
              disabled={windowVisibility['about']}
              onClick={() => handleOpenWindow('about')}
            >
              About
            </button>
          </div>
          <div>
            <button
              disabled={windowVisibility['mapEditor']}
              onClick={() => handleOpenWindow('mapEditor')}
            >
              Map Editor
            </button>
          </div>
          <div>
            <button
              disabled={windowVisibility['palette']}
              onClick={() => handleOpenWindow('palette')}
            >
              Palette
            </button>
          </div>
          <div>
            <button
              disabled={windowVisibility['tools']}
              onClick={() => handleOpenWindow('tools')}
            >
              Tools
            </button>
          </div>
          <div>
            <button
              disabled={windowVisibility['preview']}
              onClick={() => handleOpenWindow('preview')}
            >
              Preview
            </button>
          </div>
          <div>
            <button
              disabled={windowVisibility['saveLoad']}
              onClick={() => handleOpenWindow('saveLoad')}
            >
              Save / Load
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
