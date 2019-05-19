import React from 'react'
import useReduxState from '../hooks/useReduxState'
import { windowVisibilitySelector } from '../state/selectors'
import { setWindowVisibilityAction } from '../state/actions'
import styles from './Panel.css'

export default function WindowWithVisibility ({ name, title, children }) {

  const [ visible, setVisible ] = useReduxState(state => windowVisibilitySelector(state, name), setWindowVisibilityAction)

  if (!visible) return null

  return (
    <Window
      title={title}
      onClose={() => setVisible(name, false)}
    >
      {children}
    </Window>
  )
}

export function Window ({ title, onClose, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button
          onClick={onClose}
          className={styles.closeButton}
        >
          <img src={'icon-cross.png'} />
        </button>
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}
