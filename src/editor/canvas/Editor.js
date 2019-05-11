import { SIZE, TOOLS } from '../consts'
import loadImage from '../util/loadImage'
import { setMapTileAction } from '../state/actions'
import drawTiles from './drawTiles'
import drawGrid from './drawGrid'
import drawCursor from './drawCursor'

export default class Editor {

  currentTileIndex = null

  constructor (canvas, store) {

    this.canvas = canvas
    this.ctx = canvas.getContext('2d')

    this.store = store

    this.getState()
    this.subscribeToStore()

    this.resizeCanvas()

    this.loadAssets().then(() => this.render())

    this.mousePosition = { x: -99, y: -99 }
    this.mouseDown = false
    this.mouseOver = false

    this.bindListeners()
  }

  resizeCanvas () {
    this.canvas.width = this.map.width * SIZE
    this.canvas.height = this.map.height * SIZE
  }

  getState () {
    const state = this.store.getState()
    this.setState(state)
  }

  setState (state) {
    this.selectedEntity = state.selectedEntity
    this.selectedTool = state.selectedTool
    this.selectedTile = state.selectedTile
    this.game = state.game
    this.showGrid = state.showGrid

    // computed state
    this.map = this.game.levels[0]
    this.palette = this.game.palettes[0]
  }

  subscribeToStore () {
    this.store.subscribe(() => {
      this.getState(this.store)
      this.render()
    })
  }

  handleMouseMove = (e) => {
    this.mousePosition.x = e.pageX - this.canvas.offsetLeft
    this.mousePosition.y = e.pageY - this.canvas.offsetTop

    const x = Math.floor(this.mousePosition.x / SIZE)
    const y = Math.floor(this.mousePosition.y / SIZE)

    const index = (y * this.map.width) + x
    if (this.mouseDown && this.currentTileIndex !== index) {
      this.paintCurrentMapTile()
    }
    this.currentTileIndex = index

    this.render()
  }

  handleMouseEnter = () => {
    this.mouseOver = true
  }

  handleMouseLeave = () => {
    this.mouseOver = false
    this.mouseDown = false
    this.mousePosition.x = -99
    this.mousePosition.y = -99
    this.render()
  }

  handleMouseDown = () => {
    this.mouseDown = true
    if (this.selectedTool === TOOLS.INSPECT) {
      console.log('inspecting')
    } else {
      this.paintCurrentMapTile()
    }
  }

  handleMouseUp = () => {
    this.mouseDown = false
  }

  paintCurrentMapTile () {
    let tile
    if (this.selectedTool === TOOLS.PAINT) {
      tile = this.selectedTile
    } else if (this.selectedTool === TOOLS.ERASE) {
      tile = 0
    }
    const x = Math.floor(this.mousePosition.x / SIZE)
    const y = Math.floor(this.mousePosition.y / SIZE)

    this.store.dispatch(setMapTileAction(x, y, tile))
  }

  bindListeners () {
    this.canvas.addEventListener('mousemove', this.handleMouseMove)
    this.canvas.addEventListener('mouseenter', this.handleMouseEnter)
    this.canvas.addEventListener('mouseleave', this.handleMouseLeave)
    this.canvas.addEventListener('mousedown', this.handleMouseDown)
    this.canvas.addEventListener('mouseup', this.handleMouseUp)
  }

  unbindListeners () {
    this.canvas.removeEventListener('mousemove', this.handleMouseMove)
    this.canvas.removeEventListener('mouseenter', this.handleMouseEnter)
    this.canvas.removeEventListener('mouseleave', this.handleMouseLeave)
    this.canvas.removeEventListener('mousedown', this.handleMouseDown)
    this.canvas.removeEventListener('mouseup', this.handleMouseUp)
  }

  loadAssets () {
    const { tiles, entities } = this.palette

    const basePath = `/assets/games/${this.game.id}/assets`
    const toLoad = [...tiles, ...entities]

    return loadAllAssets(basePath, toLoad)
      .then(assets => {
        this.assets = assets
      })
  }

  render () {

    if (!this.game) return
    if (!this.assets) return

    const width = this.map.width * SIZE
    const height = this.map.height * SIZE

    this.ctx.fillStyle = '#deecff'
    this.ctx.fillRect(0, 0, width, height)

    drawTiles(this.ctx, this.map, this.assets)

    if (this.showGrid) {
      drawGrid(this.ctx, width, height, '#ffffff')
    }

    const x = Math.floor(this.mousePosition.x / SIZE) * SIZE
    const y = Math.floor(this.mousePosition.y / SIZE) * SIZE

    drawCursor(this.ctx, x, y, this.selectedEntity, this.selectedTile, this.selectedTool, this.assets)
  }
}

function loadAllAssets (basePath, tiles) {
  const loaders = tiles.map(tile => loadImage(`${basePath}/${tile.sprite}`))
  return Promise.all(loaders)
    .then(loaded => tiles.reduce((byId, tile, ix) => {
      byId[tile.id] = loaded[ix]
      return byId
    }, {}))
}
