export default function chunk (arr, size = 1) {

  const chunks = []

  for (let i = 0, l = arr.length, group; i < l; i++) {
    if (i % size === 0) {
      group = []
      chunks.push(group)
    }
    group.push(arr[i])
  }

  return chunks
}
