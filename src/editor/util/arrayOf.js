export default function arrayOf (length, content) {
  return Array.from({ length }).map(() => content)
}
