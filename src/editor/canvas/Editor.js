import { SIZE, TOOLS } from '../consts'
import { clearMapEntitiesAction, clearMapEntityAction, setMapEntityAction, setMapTileAction } from '../state/actions'
import drawTiles from './drawTiles'
import drawGrid from './drawGrid'
import drawCursor from './drawCursor'
import drawEntities from './drawEntities'
import loadAssets from './loadAssets'

export default class Editor {

  constructor (canvas, store) {

    this.canvas = canvas
    this.ctx = canvas.getContext('2d')

    this.store = store

    this.getState()
    this.subscribeToStore()

    this.offset = { x: 10, y: 10 }

    // TODO decide if these are sensible numbers
    this.canvas.width = 368
    this.canvas.height = 368

    this.loadAssets().then(() => this.render())

    this.mousePosition = { x: -99, y: -99 }
    this.currentTileIndex = null
    this.leftMouseDown = false
    this.mouseOver = false

    this.bindListeners()
  }

  getState () {
    const state = this.store.getState()

    this.selectedEntity = state.selectedEntity
    this.selectedTool = state.selectedTool
    this.selectedTile = state.selectedTile
    this.game = state.game
    this.showGrid = state.showGrid

    // computed state
    this.map = this.game.levels[state.currentLevel]
    this.palette = this.game.palettes[state.currentPalette]

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

    if (x < this.map.width && y < this.map.height) {
      const index = (y * this.map.width) + x
      if (this.leftMouseDown && this.currentTileIndex !== index) {
        this.paintCurrent()
      }
      this.currentTileIndex = index
    } else {
      this.currentTileIndex = null
    }

    this.render()
  }

  handleMouseEnter = () => {
    this.mouseOver = true
  }

  handleMouseLeave = () => {
    this.mouseOver = false
  }

  handleMouseDown = (e) => {
    if (e.button === 0) {
      this.leftMouseDown = true
      if (this.currentTileIndex) {
        this.paintCurrent()
      }
    }
  }

  handleMouseUp = () => {
    this.leftMouseDown = false
  }

  paintCurrent () {

    const x = Math.floor(this.mousePosition.x / SIZE)
    const y = Math.floor(this.mousePosition.y / SIZE)

    if (this.selectedTool === TOOLS.PAINT) {

      // handle tiles
      if (this.selectedTile !== null) {

        if (this.isEntityAt(x, y)) {
          this.store.dispatch(clearMapEntityAction(x, y))
        }

        this.store.dispatch(setMapTileAction(x, y, this.selectedTile))
      }

      // handle entities
      if (this.selectedEntity !== null) {
        const entity = this.palette.entities.find(entity => entity.id === this.selectedEntity)
        if (entity.unique) {
          this.store.dispatch(clearMapEntitiesAction(this.selectedEntity))
        }
        this.store.dispatch(setMapEntityAction(x, y, this.selectedEntity))
        // also set the square under the entity to "base floor" for safety
        this.store.dispatch(setMapTileAction(x, y, 1))
      }
    }

    if (this.selectedTool === TOOLS.ERASE) {
      if (this.isEntityAt(x, y)) {
        this.store.dispatch(clearMapEntityAction(x, y))
      } else {
        this.store.dispatch(setMapTileAction(x, y, 0))
      }
    }
  }

  isEntityAt (x, y) {
    return this.map.entities.some(entity => (entity.x === x && entity.y === y))
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

    const basePath = `/${this.game.id}/assets`
    const toLoad = [...tiles, ...entities]

    return loadAssets(basePath, toLoad)
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
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    drawTiles(this.ctx, this.map, this.assets)
    drawEntities(this.ctx, this.map, this.assets)

    if (this.showGrid) {
      drawGrid(this.ctx, width, height, '#ffffff')
    }

    const x = Math.floor(this.mousePosition.x / SIZE) * SIZE
    const y = Math.floor(this.mousePosition.y / SIZE) * SIZE

    drawCursor(this.ctx, x, y, this.selectedEntity, this.selectedTile, this.selectedTool, this.assets)
  }
}
