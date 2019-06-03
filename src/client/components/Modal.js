import React, { useEffect } from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './Modal.css'
import Window from './Window'

export default function Modal ({ visible, title, children, onClose }) {

  useStyles(styles)

  useEffect(() => {
    const closeIfEscape = (event) => {
      if (event.keyCode !== 27) return
      onClose()
    }
    if (visible) {
      document.body.classList.add('modal-open')
      document.addEventListener('keydown', closeIfEscape, false)
    } else {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', closeIfEscape, false)
    }
  }, [onClose, visible])

  if (!visible) return null

  const capture = event => {
    event.stopPropagation()
  }

  return (
    <div
      className={styles.container}
      onMouseDown={onClose}
    >
      <div onMouseDown={capture}>
        <Window
          title={title}
          onClose={onClose}
          className={styles.windowOverride}
        >
          {children}
        </Window>
      </div>
    </div>
  )
}
