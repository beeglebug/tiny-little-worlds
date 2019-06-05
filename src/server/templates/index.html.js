export default (content, scripts = [], styles = '') => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Tiny Little Worlds</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="favicon.png" />
  ${styles}
</head>
<body>
  ${content}
  ${scripts.map(toScriptTag)}
</body>
</html>`

function toScriptTag (src) {
  return `<script src="/${src}"></script>`
}
