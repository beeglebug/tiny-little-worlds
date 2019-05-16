import React from 'react'
import useReduxState from '../hooks/useReduxState'
import { windowVisibilitySelector } from '../state/selectors'
import { setWindowVisibilityAction } from '../state/actions'
import styles from './Panel.css'

export default function Panel ({ name, title, children }) {

  const [ visible, setVisible ] = useReduxState(state => windowVisibilitySelector(state, name), setWindowVisibilityAction)

  if (!visible) return null

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button
          onClick={() => setVisible(name, false)}
          className={styles.closeButton}
        >x</button>
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}
