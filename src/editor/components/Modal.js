import React, { useEffect } from 'react'
import styles from './Modal.css'
import { Window } from './Panel'

export default function Modal ({ visible, title, children, onClose }) {

  const closeIfEscape = (event) => {
    if (event.keyCode !== 27) return
    onClose()
  }

  useEffect(() => {
    if (visible) {
      document.body.classList.add('modal-open')
      document.addEventListener('keydown', closeIfEscape, false)
    } else {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', closeIfEscape, false)
    }
  }, [visible])

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
