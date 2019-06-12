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
  folder.file('Dialogue.js.html', generateHtml(game))

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
  <style>
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
  main {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  </style>
</head>
<body>
  <main>
    <div id="game"></div>
  </main>
  <script> 
    const container = document.getElementById('game')
    const engine = new Engine(container, 320, 180)
    engine.load(window.game)
    container.addEventListener('click', () => engine.start())
  </script>
</body>
</html>
`
}
