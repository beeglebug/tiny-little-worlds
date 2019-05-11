import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGameAction } from '../state/actions'
import { gameSelector } from '../state/selectors'
import Panel from './Panel'
import Button from './Button'
import styles from './SaveLoadPanel.css'

export default function SaveLoadPanel () {

  const [ data, setData ] = useState('')
  const dispatch = useDispatch()
  const game = useSelector(gameSelector)
  const textAreaRef = useRef()

  const save = () => {
    setData(JSON.stringify(game))
    // TODO better way of doing this?
    setTimeout(() => textAreaRef.current.select(), 10)
  }

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
      <div>
        <Button onClick={save}>
          save
        </Button>
        <Button onClick={load}>
          load
        </Button>
      </div>
    </Panel>
  )
}
