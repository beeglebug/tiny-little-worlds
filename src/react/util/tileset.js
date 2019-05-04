
export function getTileIndexFromPosition (mousePosition, tileset) {
  const columns = tileset.width / tileset.tileSize
  const x = Math.floor(mousePosition.x / tileset.tileSize)
  const y = Math.floor(mousePosition.y / tileset.tileSize)
  // indices are shifted by 1 to allow zero to represent empty space
  return (y * columns) + x + 1
}

export function getPositionFromTileIndex (index, tileset) {
  // indices are shifted by 1 to allow zero to represent empty space
  index = index - 1
  const columns = tileset.width / tileset.tileSize
  const x = (index % columns) * tileset.tileSize
  const y = Math.floor(index / columns) * tileset.tileSize
  return [x, y]
}
