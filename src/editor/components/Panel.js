import React from 'react'
import classnames from 'classnames'
import useReduxState from '../hooks/useReduxState'
import { windowVisibilitySelector } from '../state/selectors'
import { setWindowVisibilityAction } from '../state/actions'
import styles from './Panel.css'

export default function WindowWithVisibility (props) {

  const [ visible, setVisible ] = useReduxState(state => windowVisibilitySelector(state, props.name), visible => setWindowVisibilityAction(props.name, visible))

  if (!visible) return null

  return (
    <Window
      {...props}
      onClose={() => setVisible(name, false)}
    />
  )
}

export function Window ({ title, onClose, children, className }) {
  return (
    <div className={classnames(styles.container, className)}>
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
