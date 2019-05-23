// TODO see if we can print the map data in a grid for manual editing
export default function prettyPrint (game) {
  const spaces = 2
  return JSON
    .stringify(game, undefined, spaces)
    // find anything between "key: [" and "]" and replace all whitespace with single space (stops indenting)
    .replace(/("data": \[)([^\]]+)/g, (_, a, b) => a + b.replace(/\s+/g, ' '))
    .replace(/("collider": \[)([^\]]+)/g, (_, a, b) => a + b.replace(/\s+/g, ' '))
}
