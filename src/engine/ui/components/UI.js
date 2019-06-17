import React from 'react'
import { useSelector } from 'react-redux'
import styles from './UI.css'
import DialogueWindow from './DialogueWindow'

export default function UI ({ controls }) {

  const visible = useSelector(state => state.visible)
  const dialogue = useSelector(state => state.dialogue)

  return (
    <div className={styles.container}>
      <DialogueWindow
        visible={visible}
        dialogue={dialogue}
        controls={controls}
      />
    </div>
  )
}
