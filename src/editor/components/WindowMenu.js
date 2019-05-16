import React, { useState, useRef } from 'react'
import useOnClickOutside from '../hooks/useOnClickOutside'
import styles from './WindowMenu.css'

export default function WindowMenu () {

  const ref = useRef()
  const [ isOpen, setIsOpen ] = useState(false)

  const handleClose = () => setIsOpen(false)
  const handleToggle = () => setIsOpen(!isOpen)
  const handleOpenWindow = window => {
    setIsOpen(false)
  }

  useOnClickOutside(ref, handleClose)

  return (
    <div ref={ref}>
      <button onClick={handleToggle}>Windows</button>
      {isOpen && (
        <div className={styles.menu}>
          <div>
            <button onClick={() => handleOpenWindow('about')}>About</button>
          </div>
          <div>
            <button onClick={() => handleOpenWindow('mapEditor')}>Map Editor</button>
          </div>
          <div>
            <button onClick={() => handleOpenWindow('palette')}>Palette</button>
          </div>
          <div>
            <button onClick={() => handleOpenWindow('tools')}>Tools</button>
          </div>
          <div>
            <button onClick={() => handleOpenWindow('preview')}>Preview</button>
          </div>
          <div>
            <button onClick={() => handleOpenWindow('saveLoad')}>Save / Load</button>
          </div>
        </div>
      )}
    </div>
  )
}
