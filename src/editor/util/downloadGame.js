import Zip from 'jszip'
import { saveAs } from 'file-saver'
import prettyPrint from './prettyPrint'

export default function (game) {

  const name = sanitise(game.name)

  const zip = new Zip()

  const player = `player.${__VERSION}.js`

  const folder = zip.folder(name)

  folder.file('readme.txt', generateReadme(game))
  folder.file('game.js', generateJS(game))
  folder.file(player, fetch(player).then(response => response.text()))
  folder.file('index.html', generateHtml(game))

  // TODO more than first level
  const level = game.levels[0]
  const { tiles, entities } = game.palettes[level.palette]
  const textures = [...tiles, ...entities].filter(item => item.texture).map(item => item.texture)

  textures.forEach((texture) => {
    folder.file(texture, fetch(texture).then(response => response.blob()), { binary: true })
  })

  zip.generateAsync({ type: 'blob' })
    .then(content => saveAs(content, `${name}.zip`))
}

function sanitise (string) {
  return string.replace(/[^a-z0-9]/gi, '_').toLowerCase()
}

function generateReadme (game) {
  return `
${game.name}

downloaded from http://tinylittle.world
`
}

function generateJS (game) {
  const json = prettyPrint(game)
  return `window.game = ${json}`
}

function generateHtml (game) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <script src="player.${__VERSION}.js"></script>
  <script src="game.js"></script>
  <title>${game.name}</title>
</head>
<body>
  <canvas id="canvas2d"></canvas>
  <canvas id="canvas3d"></canvas>
  <script> 
    const canvas3d = document.getElementById('canvas3d')
    const canvas2d = document.getElementById('canvas2d')
    const engine = new Engine(canvas3d, canvas2d)
    engine.load(window.game)
    canvas3d.addEventListener('click', () => engine.start())
  </script>
</body>
</html>
`
}
