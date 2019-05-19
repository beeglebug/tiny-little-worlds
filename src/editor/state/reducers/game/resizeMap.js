import chunk from '../../../util/chunk'
import arrayOf from '../../../util/arrayOf'

export default function resizeMap (state, action) {

  const { width, height, levelIndex } = action.payload

  const level = state.levels[levelIndex]

  const resized = { ...level }

  if (width > level.width) {

    console.log(resized.data.length)

    const newColumns = width - level.width

    // get old rows
    const rows = chunk(level.data, level.width)

    console.log('rows', rows.length, level.data, level.height)

    // add blanks to end of each row
    rows.forEach(row => {
      const newTiles = arrayOf(newColumns, 0)
      row.push(...newTiles)
    })

    resized.data = [].concat(...rows)

    console.log(resized.data.length)

  } else if (width < level.width) {

    // TODO remove any entities at x < new width

  }

  if (height > level.height) {

  } else if (height < level.height) {

    // TODO remove any entities at y < new height

  }

  resized.width = width

  const levels = [...state.levels]
  levels[levelIndex] = resized

  return {
    ...state,
    levels,
  }
}
