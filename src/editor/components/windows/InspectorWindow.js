import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentLevelSelector, selectedEntitySelector } from '../../state/selectors'
import Window from '../Panel'
import { updateEntityAction } from '../../state/actions'
import ValidatedIntegerInput from '../ValidatedIntegerInput'

export default function InspectorWindow () {
  const selected = useSelector(selectedEntitySelector)
  const level = useSelector(currentLevelSelector)
  return (
    <Window
      name={'inspector'}
      title={'Inspector'}
    >
      <div style={{ width: 200 }}>
        <Inspector
          entity={selected}
          level={level}
        />
      </div>
    </Window>
  )
}

function Inspector ({ entity, level }) {
  const dispatch = useDispatch()

  const updateEntity = useCallback(props => {
    dispatch(updateEntityAction(entity.id, props))
  }, [dispatch, entity])

  if (!entity) return 'Nothing selected'

  return (
    <table>
      <tbody>
        <tr>
          <td>
            type
          </td>
          <td>
            {entity.type}
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor={'entity_x'}>x</label>
          </td>
          <td>
            <ValidatedIntegerInput
              id={'entity_x'}
              min={0}
              max={level.width - 1}
              value={entity.x}
              onChange={x => updateEntity({ x })}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor={'entity_y'}>y</label>
          </td>
          <td>
            <ValidatedIntegerInput
              id={'entity_y'}
              min={0}
              max={level.height - 1}
              value={entity.y}
              onChange={y => updateEntity({ y })}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
