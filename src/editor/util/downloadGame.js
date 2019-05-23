import Zip from 'jszip'
import { saveAs } from 'file-saver'
import prettyPrint from './prettyPrint'

export default function (game) {

  const name = sanitise(game.name)

  const zip = new Zip()

  const root = zip.folder(name)

  root.file('readme.txt', generateReadme(game))
  root.file('game.json', prettyPrint(game))

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
