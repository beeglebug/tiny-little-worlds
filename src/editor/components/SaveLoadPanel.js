import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGameAction } from '../state/actions'
import { gameSelector } from '../state/selectors'
import downloadGame from '../util/downloadGame'
import prettyPrint from '../util/prettyPrint'
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

  const download = () => downloadGame(game)

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
      <Button onClick={download}>
        download
      </Button>
    </Panel>
  )
}
