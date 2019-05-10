import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'
import { selectTileAction, selectToolAction } from '../state/actions'
import { gameSelector, selectedTileSelector, selectedToolSelector } from '../state/selectors'
import { TOOLS } from '../consts'
import Panel from './Panel'
import styles from './PalettePanel.css'

export default function PalettePanel () {

  const [ selectedTile, setSelectedTile ] = useSelectedTile()
  const game = useSelector(gameSelector)

  if (!game) return null

  function handleClick (tileId) {
    setSelectedTile(tileId)
  }

  // TODO per level palette
  const { name, tiles } = game.palettes[0]

  return (
    <Panel title={'palette'}>
      <h3 className={styles.name}>{name}</h3>
      {tiles.map(({ id, name, sprite }) => {
        const src = `/assets/games/${game.id}/assets/${sprite}`
        return (
          <img
            className={classnames(styles.swatch, selectedTile === id && styles.selected)}
            key={id}
            src={src}
            title={name}
            onClick={() => handleClick(id)}
          />
        )
      })}
    </Panel>
  )
}

function useSelectedTile () {
  const selectedTile = useSelector(selectedTileSelector)
  const selectedTool = useSelector(selectedToolSelector)
  const dispatch = useDispatch()

  function setSelectedTile (tileId) {
    dispatch(selectTileAction(tileId))
    // reset tool selection
    if (selectedTool !== TOOLS.PAINT) {
      dispatch(selectToolAction(TOOLS.PAINT))
    }
  }

  return [ selectedTile, setSelectedTile ]
}
