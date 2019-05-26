import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOOLS } from '../consts'
import { clearMapAction, setCurrentToolAction, setModalVisibilityAction } from '../state/actions'
import { currentToolSelector } from '../state/selectors'
import Panel from './Panel'
import Button from './Button'
import styles from './ToolsPanel.css'

export default function ToolsPanel () {

  const currentTool = useSelector(currentToolSelector)
  const dispatch = useDispatch()

  const selectTool = (tool) => {
    if (tool !== currentTool) {
      dispatch(setCurrentToolAction(tool))
    }
  }

  const clearMap = () => {
    const sure = window.confirm('clear map?')
    if (sure) {
      dispatch(clearMapAction())
    }
  }

  const resizeLevel = () => {
    dispatch(setModalVisibilityAction('resizeLevel', true))
  }

  return (
    <Panel
      name={'tools'}
      title={'tools'}
    >
      <div className={styles.buttonContainer}>
        <Button
          onClick={() => selectTool(TOOLS.PAINT)}
          selected={currentTool === TOOLS.PAINT}
        >
          paint
        </Button>
        <Button
          onClick={() => selectTool(TOOLS.ERASE)}
          selected={currentTool === TOOLS.ERASE}
        >
          erase
        </Button>
        <Button
          onClick={() => selectTool(TOOLS.SELECT)}
          selected={currentTool === TOOLS.SELECT}
        >
          select
        </Button>
        <Button onClick={clearMap}>
          clear
        </Button>
        <Button onClick={resizeLevel}>
          resize
        </Button>
      </div>
    </Panel>
  )
}
