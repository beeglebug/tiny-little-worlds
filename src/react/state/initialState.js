import { TOOLS } from '../consts'

export default {
  selectedTile: 1,
  selectedTool: TOOLS.PAINT,
  map: {
    width: 16,
    height: 16,
    tileSize: 16,
    data: Array.from({ length: 16 * 16 }).map(() => 0),
  }
}
