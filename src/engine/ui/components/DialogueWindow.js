import React, { useEffect } from 'react'
import icon from '../../../assets/arrow-down-white.png'
import useTypewriterAnimation from '../hooks/useTypewriterAnimation'
import styles from './DialogueWindow.css'

export default function DialogueWindow ({ dialogue, controls, onFinish }) {

  const [ currentLine, nextLine ] = useDialogue(dialogue, onFinish)

  useEffect(() => {
    function handleKeyUp (e) {
      const key = e.keyCode
      if (controls.interact.keyCodes.includes(key)) {
        nextLine()
      }
    }
    document.addEventListener('keyup', handleKeyUp)
    return () => document.removeEventListener('keyup', handleKeyUp)
  }, [controls, nextLine])

  return (
    <AnimatedDialogue text={currentLine} />
  )
}

// TODO multiline
function useDialogue (dialogue, onFinish) {
  const currentLine = dialogue
  function next () {
    onFinish()
  }
  return [ currentLine, next ]
}

// keep this one level down so the keyboard input hook doesnt keep triggering
function AnimatedDialogue ({ text }) {
  const [currentText] = useTypewriterAnimation(text, 50)
  const showIcon = currentText === text
  return (
    <div className={styles.container}>
      {currentText}
      {showIcon && <img src={icon} />}
    </div>
  )
}
