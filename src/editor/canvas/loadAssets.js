import loadImage from '../util/loadImage'

/**
 * Load an array of assets (tiles / entities)
 * @param basePath
 * @param assets
 */
export default function loadAssets (basePath, assets) {

  const loaders = assets.map(asset => loadImage(`${basePath}/${asset.sprite}`))

  return Promise.all(loaders)
    .then(loaded => {
      return assets.reduce((byId, asset, ix) => {
        byId[asset.id] = loaded[ix]
        return byId
      }, {})
    })
}
