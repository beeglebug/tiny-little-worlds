import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateLevelAction } from '../../state/actions'
import Window from '../Panel'
import Input from '../Input'

export default function LevelPropertiesWindow () {

  const currentLevel = useSelector(state => state.currentLevel)
  const level = useSelector(state => state.game.levels[currentLevel])
  const dispatch = useDispatch()

  // TODO find other dispatches and use useCallback
  const updateLevel = useCallback(
    data => dispatch(updateLevelAction(data, currentLevel)),
    [dispatch, currentLevel]
  )

  return (
    <Window
      name={'levelProperties'}
      title={'Level Properties'}
    >
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor={'level_name'}>name</label>
            </td>
            <td>
              <Input
                id={'level_name'}
                value={level.name}
                onChange={name => updateLevel({ name })}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </Window>
  )
}
