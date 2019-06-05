export default (content, styles = '') => `
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
  <div id="root">${content}</div>
</body>
</html>`
