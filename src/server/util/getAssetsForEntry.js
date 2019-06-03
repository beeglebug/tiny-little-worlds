/**
 * Find all the chunks in a webpack stats dump for a given entry name
 */
export default function getAssetsForEntry (stats, name) {
  return Object.entries(stats.assetsByChunkName)
    .filter(([key]) => {
      return (key === name || (key.startsWith('vendors') && key.includes(`~${name}`)))
    })
    .map(([, value]) => value)
}
