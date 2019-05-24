import React, { useState, useRef, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGameAction } from '../../state/actions'
import { gameSelector } from '../../state/selectors'
import downloadGame from '../../util/downloadGame'
import prettyPrint from '../../util/prettyPrint'
import Button from '../Button'
import styles from './SaveLoad.css'

export default function SaveLoad () {

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
    <Fragment>
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
    </Fragment>
  )
}
