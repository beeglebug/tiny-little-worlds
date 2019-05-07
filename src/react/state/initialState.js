import { TOOLS } from '../consts'
import arrayOf from '../util/arrayOf'

export default {
  selectedTile: 1,
  selectedTool: TOOLS.PAINT,
  map: {
    width: 16,
    height: 16,
    tileSize: 16,
    data: arrayOf(16 * 16, 0),
  }
}
