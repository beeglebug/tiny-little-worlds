import chunk from '../../../util/chunk'
import arrayOf from '../../../util/arrayOf'

export default function resizeMap (state, action) {

  const { width, height, levelIndex } = action.payload

  const level = state.levels[levelIndex]

  const resized = {
    ...level,
    height,
    width,
  }

  if (width > level.width) {

    const columnsToAdd = width - level.width

    // get old rows
    const rows = chunk(level.data, level.width)

    // add blanks to end of each row
    rows.forEach(row => {
      const newTiles = arrayOf(columnsToAdd, 0)
      row.push(...newTiles)
    })

    resized.data = [].concat(...rows)

  } else if (width < level.width) {

    const columnsToRemove = level.width - width

    const rows = chunk(level.data, level.width)

    // shrink each row
    resized.data = rows.reduce((data, row) => {
      const newRow = row.slice(0, -columnsToRemove)
      data.push(...newRow)
      return data
    }, [])

    // TODO remove any entities at x < new width

  }

  if (height > level.height) {

    const rowsToAdd = height - level.height

    const tiles = arrayOf(width * rowsToAdd, 0)

    resized.data.push(...tiles)

  } else if (height < level.height) {

    const tilesToRemove = (level.height - height) * width

    resized.data = resized.data.slice(0, -tilesToRemove)

    // TODO remove any entities at y < new height
  }

  const levels = [...state.levels]
  levels[levelIndex] = resized

  return {
    ...state,
    levels,
  }
}
