import React from 'react'
import styles from './Row.css'

export default function Row ({ children }) {
  return (
    <div className={styles.row}>
      {children}
    </div>
  )
}
