import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import classnames from 'classnames'
import styles from './Window.css'

export default function Window ({ title, onClose, children, className }) {

  useStyles(styles)

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
