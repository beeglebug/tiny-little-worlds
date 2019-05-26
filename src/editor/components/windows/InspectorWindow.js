import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedEntitySelector } from '../../state/selectors'
import Window from '../Panel'
import Input from '../Input'
import { updateEntityAction } from '../../state/actions'

export default function InspectorWindow () {
  const selected = useSelector(selectedEntitySelector)
  return (
    <Window
      name={'inspector'}
      title={'Inspector'}
    >
      <div style={{ width: 200 }}>
        <Inspector entity={selected} />
      </div>
    </Window>
  )
}

function Inspector ({ entity }) {
  const dispatch = useDispatch()
  const updateEntity = useCallback(props => {
    dispatch(updateEntityAction(entity.id, props))
  }, [dispatch, entity])

  if (!entity) return 'Nothing selected'

  // TODO buffer the changes and dont allow invalid values to hit redux

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
            <Input
              id={'entity_x'}
              type={'number'}
              value={entity.x}
              onChange={x => updateEntity({ x: parseInt(x) })}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor={'entity_y'}>y</label>
          </td>
          <td>
            <Input
              id={'entity_y'}
              type={'number'}
              value={entity.y}
              onChange={y => updateEntity({ y: parseInt(y) })}
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}
