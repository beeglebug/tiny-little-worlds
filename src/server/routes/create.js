import React from 'react'
import { renderToString } from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'
import html from '../templates/index.html'
import CreatePage from '../../client/pages/CreatePage'
import stats from '../../../dist/stats.json'

export default async function (request, response) {

  const { user } = request

  const props = { user }

  const content = renderToString(
    <CreatePage {...props} />
  )

  const styles = flushToHTML()

  const scripts = getChunksByName('editor').map(toScript)

  response.send(html(content, styles, scripts))
}

function getChunksByName (name) {
  return Object.entries(stats)
    .filter(([key]) => key.includes(name))
    .map(([, value]) => value)
}

function toScript (src) {
  return `<script src="${src}"></script>`
}
