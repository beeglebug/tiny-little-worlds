import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGameAction } from '../state/actions'
import { gameSelector } from '../state/selectors'
import Panel from './Panel'
import Button from './Button'
import styles from './SaveLoadPanel.css'

export default function SaveLoadPanel () {

  const game = useSelector(gameSelector)
  const [ data, setData ] = useState(JSON.stringify(game))
  const dispatch = useDispatch()
  const textAreaRef = useRef()

  useEffect(() => {
    setData(JSON.stringify(game))
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
    <Panel title={'save / load'}>
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
