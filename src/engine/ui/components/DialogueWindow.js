import React from 'react'
import { useSelector } from 'react-redux'
import styles from './DialogueWindow.css'

export default function DialogueWindow () {

  const visible = useSelector(state => state.visible)
  const dialogue = useSelector(state => state.dialogue)

  if (!visible) return null

  return (
    <div className={styles.container}>
      {dialogue}
    </div>
  )
}
