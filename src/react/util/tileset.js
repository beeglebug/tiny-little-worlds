
export function getTileIndexFromPosition (mousePosition, tileset) {
  const columns = tileset.width / tileset.tileSize
  const x = Math.floor(mousePosition.x / tileset.tileSize)
  const y = Math.floor(mousePosition.y / tileset.tileSize)
  return (y * columns) + x
}

export function getPositionFromTileIndex (index, tileset) {
  const columns = tileset.width / tileset.tileSize
  const x = (index % columns) * tileset.tileSize
  const y = Math.floor(index / columns) * tileset.tileSize
  return [x, y]
}
