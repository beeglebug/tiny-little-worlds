import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGameAction } from '../state/actions'
import { gameSelector } from '../state/selectors'
import PanelPanel from './Panel'
import Button from './Button'
import styles from './SaveLoadPanel.css'

export default function SaveLoadPanel () {

  const [ data, setData ] = useState('')
  const dispatch = useDispatch()
  const game = useSelector(gameSelector)

  const save = () => {
    setData(JSON.stringify(game))
  }

  const load = () => {
    try {
      const game = JSON.parse(data)
      // TODO validate?
      dispatch(setGameAction(game))
      setData('')
    } catch (error) {
      alert(`Error parsing map: ${error}`)
    }

  }

  const handleChange = (event) => {
    setData(event.target.value)
  }

  return (
    <PanelPanel title={'save / load'}>
      <textarea
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
    </PanelPanel>
  )
}
