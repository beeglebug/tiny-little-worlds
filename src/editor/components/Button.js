import React from 'react'
import classnames from 'classnames'
import styles from './Button.css'

export default function Button ({ children, selected, onClick }) {
  return (
    <button
      className={classnames(styles.button, selected && styles.selected)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
