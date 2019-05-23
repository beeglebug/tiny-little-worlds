import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateLevelAction } from '../../state/actions'
import Window from '../Panel'
import styles from './LevelPropertiesWindow.css'

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
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>
              <label htmlFor={'level_name'}>name</label>
            </td>
            <td>
              <input
                id={'level_name'}
                className={styles.input}
                value={level.name}
                onChange={e => updateLevel({ name: e.target.value })}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </Window>
  )
}
