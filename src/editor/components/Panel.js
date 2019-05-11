import React from 'react'
import styles from './Panel.css'

export default function Panel ({ title, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}
