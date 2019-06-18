import React, { useEffect, useMemo, useState } from 'react'
import icon from '../../../assets/arrow-down-white.png'
import useTypewriterAnimation from '../hooks/useTypewriterAnimation'
import parseDialogue from '../util/parseDialogue'
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

function useDialogue (dialogue, onFinish) {
  const lines = useMemo(() => parseDialogue(dialogue), [dialogue])
  const [currentLineNumber, setCurrentLineNumber] = useState(0)

  function next () {
    if (currentLineNumber < lines.length - 1) {
      return setCurrentLineNumber(currentLineNumber + 1)
    }
    onFinish()
  }

  return [ lines[currentLineNumber], next ]
}

// keep this one level down so the keyboard input hook doesnt keep triggering
function AnimatedDialogue ({ text }) {
  const currentText = useTypewriterAnimation(text, 50)
  const textWithBreaks = currentText.split('\n')
  const showIcon = currentText === text
  return (
    <div className={styles.container}>
      {textWithBreaks.map((line, index) => (<p key={index}>{line}</p>))}
      {showIcon && <img className={styles.icon} src={icon} />}
    </div>
  )
}
