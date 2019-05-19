import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGameAction } from '../state/actions'
import { gameSelector } from '../state/selectors'
import Panel from './Panel'
import Button from './Button'
import styles from './SaveLoadPanel.css'

export default function SaveLoadPanel () {

  const game = useSelector(gameSelector)
  const [ data, setData ] = useState(prettyPrint(game))
  const dispatch = useDispatch()
  const textAreaRef = useRef()

  useEffect(() => {
    setData(prettyPrint(game))
  }, [game])

  const load = () => {
    try {
      const game = JSON.parse(data)
      // TODO validate?
      dispatch(setGameAction(game))
    } catch (error) {
      alert(`Error parsing map: ${error}`)
    }
  }

  const handleChange = (event) => {
    setData(event.target.value)
  }

  return (
    <Panel
      name='saveLoad'
      title={'save / load'}
    >
      <textarea
        ref={textAreaRef}
        onChange={handleChange}
        className={styles.textarea}
        value={data}
      />
      <Button onClick={load}>
        load
      </Button>
    </Panel>
  )
}

// TODO see if we can print the map data in a grid for manual editing
function prettyPrint (game) {
  const spaces = 2
  return JSON
    .stringify(game, undefined, spaces)
    // find anything between "key: [" and "]" and replace all whitespace with single space (stops indenting)
    .replace(/("data": \[)([^\]]+)/g, (_, a, b) => a + b.replace(/\s+/g, ' '))
    .replace(/("collider": \[)([^\]]+)/g, (_, a, b) => a + b.replace(/\s+/g, ' '))
}
