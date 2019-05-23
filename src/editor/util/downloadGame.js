import Zip from 'jszip'
import { saveAs } from 'file-saver'
import prettyPrint from './prettyPrint'

export default function (game) {

  const name = sanitise(game.name)

  const zip = new Zip()

  zip
    .folder(name)
    .file('readme.txt', generateReadme(game))
    .file('game.json', prettyPrint(game))
    .file('index.html', generateHtml(game))

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

function generateHtml (game) {
  // TODO generate preview image
  const image = ''
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@maketinyworlds" />
  <meta name="twitter:title" content="${game.name}" />
  <meta name="twitter:description" content="Made with http://tinylittle.world" />
  <meta name="twitter:image" content="${image}" />
  <title>${game.name}</title>
</head>
<body>
  game goes here
</body>
</html>
`
}
