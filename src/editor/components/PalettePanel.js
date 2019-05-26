import React from 'react'
import { useSelector } from 'react-redux'
import { setCurrentEntityAction, setCurrentTileAction } from '../state/actions'
import { gameSelector, currentEntitySelector, currentTileSelector } from '../state/selectors'
import useReduxState from '../hooks/useReduxState'
import Panel from './Panel'
import PaletteSwatch from './PaletteSwatch'
import styles from './PalettePanel.css'

export default function PalettePanel () {

  const [ currentTile, setCurrentTile ] = useReduxState(currentTileSelector, setCurrentTileAction)
  const [ currentEntity, setCurrentEntity ] = useReduxState(currentEntitySelector, setCurrentEntityAction)
  const game = useSelector(gameSelector)
  const currentLevel = useSelector(state => state.currentLevel)

  if (!game) return null

  function handleClickTile (tileId) {
    setCurrentTile(tileId)
  }

  function handleClickEntity (id) {
    setCurrentEntity(id)
  }

  const level = game.levels[currentLevel]
  const { tiles, entities } = game.palettes[level.palette]

  return (
    <Panel
      name={'palette'}
      title={'palette'}
    >
      <div className={styles.row}>
        {tiles.map(({ id, name, sprite }) => {
          return (
            <PaletteSwatch
              key={id}
              selected={currentTile === id}
              src={sprite}
              title={name}
              onClick={() => handleClickTile(id)}
            />
          )
        })}
      </div>
      <div className={styles.row}>
        {entities.map(({ id, name, sprite }) => {
          return (
            <PaletteSwatch
              key={id}
              selected={currentEntity === id}
              src={sprite}
              title={name}
              onClick={() => handleClickEntity(id)}
            />
          )
        })}
      </div>
    </Panel>
  )
}
