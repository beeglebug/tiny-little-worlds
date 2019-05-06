import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import styles from './Tools.css'
import { TOOLS } from './consts'
import { selectToolAction } from './state/actions'
import { selectedToolSelector } from './state/selectors'
import Window from './Window'

export default function Tools () {

  const selectedTool = useSelector(selectedToolSelector)
  const dispatch = useDispatch()

  function selectTool (tool) {
    if (tool !== selectedTool) {
      dispatch(selectToolAction(tool))
    }
  }

  return (
    <Window title={'Tools'}>
      <button
        onClick={() => selectTool(TOOLS.PAINT)}
        className={classnames(styles.button, selectedTool === TOOLS.PAINT && styles.selected)}
      >
        paint
      </button>
      <button
        onClick={() => selectTool(TOOLS.ERASE)}
        className={classnames(styles.button, selectedTool === TOOLS.ERASE && styles.selected)}
      >
        erase
      </button>
      <button
        onClick={() => selectTool(TOOLS.INSPECT)}
        className={classnames(styles.button, selectedTool === TOOLS.INSPECT && styles.selected)}
      >
        inspect
      </button>
    </Window>
  )
}
