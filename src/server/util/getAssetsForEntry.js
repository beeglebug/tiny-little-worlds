import stats from '../../../dist/stats.json'

/**
 * Find all the chunks in the webpack stats dump for a given entry name
 */
export default function getAssetsForEntry (name) {
  return Object.entries(stats.assetsByChunkName)
    .filter(([key]) => {
      return (key === name || (key.startsWith('vendors') && key.includes(`~${name}`)))
    })
    .map(([, value]) => value)
}
