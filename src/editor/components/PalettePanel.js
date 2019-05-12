import React from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import { selectEntityAction, selectTileAction } from '../state/actions'
import { gameSelector, selectedEntitySelector, selectedTileSelector } from '../state/selectors'
import useReduxState from '../hooks/useReduxState'
import Panel from './Panel'
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
          const src = `/assets/games/${game.id}/assets/${sprite}`
          return (
            <img
              className={classnames(styles.swatch, selectedTile === id && styles.selected)}
              key={id}
              src={src}
              title={name}
              onClick={() => handleClickTile(id)}
            />
          )
        })}
      </div>
      <div className={styles.row}>
        {entities.map(({ id, name, sprite }) => {
          const src = `/assets/games/${game.id}/assets/${sprite}`
          return (
            <img
              className={classnames(styles.swatch, selectedEntity === id && styles.selected)}
              key={id}
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
