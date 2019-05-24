import loadImage from '../util/loadImage'

/**
 * Load an array of assets (tiles / entities)
 * @param assets
 */
export default function loadAssets (assets) {

  const loaders = assets.map(asset => loadImage(asset.sprite))

  return Promise.all(loaders)
    .then(loaded => {
      return assets.reduce((byId, asset, ix) => {
        byId[asset.id] = loaded[ix]
        return byId
      }, {})
    })
}
