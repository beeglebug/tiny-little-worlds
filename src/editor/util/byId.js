export default function byId (array) {
  return array.reduce((byId, item) => {
    byId[item.id] = item
    return byId
  }, {})
}
