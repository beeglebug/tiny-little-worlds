import React from 'react'
import styles from './Window.css'

export default function Window ({ title, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {title}
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}
