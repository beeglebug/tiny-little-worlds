import React from 'react'
import styles from './UI.css'
import DialogueWindow from './DialogueWindow'

export default function UI () {
  return (
    <div className={styles.container}>
      <DialogueWindow />
    </div>
  )
}
