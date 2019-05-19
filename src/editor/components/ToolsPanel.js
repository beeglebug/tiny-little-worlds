import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOOLS } from '../consts'
import { clearMapAction, selectToolAction } from '../state/actions'
import { selectedToolSelector } from '../state/selectors'
import Panel from './Panel'
import Button from './Button'

export default function ToolsPanel () {

  const selectedTool = useSelector(selectedToolSelector)
  const dispatch = useDispatch()

  const selectTool = (tool) => {
    if (tool !== selectedTool) {
      dispatch(selectToolAction(tool))
    }
  }

  const clearMap = () => {
    const sure = window.confirm('clear map?')
    if (sure) {
      dispatch(clearMapAction())
    }
  }

  return (
    <Panel
      name={'tools'}
      title={'tools'}
    >
      <Button
        onClick={() => selectTool(TOOLS.PAINT)}
        selected={selectedTool === TOOLS.PAINT}
      >
        paint
      </Button>
      <Button
        onClick={() => selectTool(TOOLS.ERASE)}
        selected={selectedTool === TOOLS.ERASE}
      >
        erase
      </Button>
      <Button onClick={clearMap}>
        clear
      </Button>
    </Panel>
  )
}
