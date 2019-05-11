import React from 'react'
import { useSelector } from 'react-redux'
import classnames from 'classnames'
import { selectEntityAction, selectTileAction, selectToolAction } from '../state/actions'
import { gameSelector, selectedEntitySelector, selectedTileSelector, selectedToolSelector } from '../state/selectors'
import useReduxState from '../hooks/useReduxState'
import { TOOLS } from '../consts'
import Panel from './Panel'
import styles from './PalettePanel.css'

export default function PalettePanel () {

  const [ , setSelectedTool ] = useReduxState(selectedToolSelector, selectToolAction)
  const [ selectedTile, setSelectedTile ] = useReduxState(selectedTileSelector, selectTileAction)
  const [ selectedEntity, setSelectedEntity ] = useReduxState(selectedEntitySelector, selectEntityAction)
  const game = useSelector(gameSelector)

  if (!game) return null

  function handleClickTile (tileId) {
    setSelectedTile(tileId)
    setSelectedTool(TOOLS.PAINT)
  }

  function handleClickEntity (id) {
    setSelectedTile(null)
    setSelectedEntity(id)
    setSelectedTool(TOOLS.PAINT)
  }

  // TODO per level palette
  const { name, tiles, entities } = game.palettes[0]

  return (
    <Panel title={'palette'}>
      <h3 className={styles.name}>{name}</h3>
      <div>
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
      <div>
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
