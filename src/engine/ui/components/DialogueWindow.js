import React from 'react'
import icon from '../../../assets/arrow-down-white.png'
import useTypewriterAnimation from '../hooks/useTypewriterAnimation'
import useBlink from '../hooks/useBlink'
import styles from './DialogueWindow.css'

export default function DialogueWindow ({ visible, dialogue, controls }) {

  const [ word, animating ] = useTypewriterAnimation(dialogue, 50)
  const [ showIcon ] = useBlink(true, animating ? null : 1000)

  if (!visible) return null

  return (
    <div className={styles.container}>
      {word}
      {!animating && showIcon && <img
        className={styles.icon}
        src={icon}
      />}
    </div>
  )
}
