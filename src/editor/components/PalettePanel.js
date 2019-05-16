import React from 'react'
import { useSelector } from 'react-redux'
import { selectEntityAction, selectTileAction } from '../state/actions'
import { gameSelector, selectedEntitySelector, selectedTileSelector } from '../state/selectors'
import useReduxState from '../hooks/useReduxState'
import Panel from './Panel'
import PaletteSwatch from './PaletteSwatch'
import styles from './PalettePanel.css'

export default function PalettePanel () {

  const [ selectedTile, setSelectedTile ] = useReduxState(selectedTileSelector, selectTileAction)
  const [ selectedEntity, setSelectedEntity ] = useReduxState(selectedEntitySelector, selectEntityAction)
  const game = useSelector(gameSelector)

  if (!game) return null

  function handleClickTile (tileId) {
    setSelectedTile(tileId)
  }

  function handleClickEntity (id) {
    setSelectedEntity(id)
  }

  // TODO per level palette
  const { tiles, entities } = game.palettes[0]

  return (
    <Panel title={'palette'}>
      <div className={styles.row}>
        {tiles.map(({ id, name, sprite }) => {
          const src = `/${game.id}/assets/${sprite}`
          return (
            <PaletteSwatch
              key={id}
              selected={selectedTile === id}
              src={src}
              title={name}
              onClick={() => handleClickTile(id)}
            />
          )
        })}
      </div>
      <div className={styles.row}>
        {entities.map(({ id, name, sprite }) => {
          const src = `/${game.id}/assets/${sprite}`
          return (
            <PaletteSwatch
              key={id}
              selected={selectedEntity === id}
              src={src}
              title={name}
              onClick={() => handleClickEntity(id)}
            />
          )
        })}
      </div>
    </Panel>
  )
}
