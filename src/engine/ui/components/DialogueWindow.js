import React from 'react'
import styles from './DialogueWindow.css'

export default function DialogueWindow ({ text }) {
  return (
    <div className={styles.container}>
      {text}
    </div>
  )
}
