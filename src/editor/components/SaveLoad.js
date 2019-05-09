import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadMapAction } from '../state/actions'
import { mapSelector } from '../state/selectors'
import Window from './Window'
import Button from './Button'
import styles from './SaveLoad.css'

export default function SaveLoad () {

  const [ data, setData ] = useState('')
  const dispatch = useDispatch()
  const map = useSelector(mapSelector)

  const save = () => {
    setData(JSON.stringify(map))
  }

  const load = () => {
    try {
      const map = JSON.parse(data)
      validateMap(map)
      dispatch(loadMapAction(map))
      setData('')
    } catch (error) {
      alert(`Error parsing map: ${error}`)
    }

  }

  const handleChange = (event) => {
    setData(event.target.value)
  }

  return (
    <Window title={'save / load'}>
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
    </Window>
  )
}

function validateMap (map) {
  if (!map.width) throw 'No width'
  if (!map.height) throw 'No height'
  if (map.data.length !== map.width * map.height) throw 'data does not match dimensions'
}
