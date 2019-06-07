import React from 'react'
import { renderToString } from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'
import html from '../templates/index.html'
import CreatePage from '../../client/pages/CreatePage'

export default async function (request, response) {

  const { user } = request

  const props = { user }

  const content = renderToString(
    <CreatePage {...props} />
  )

  const styles = flushToHTML()

  // TODO this will be editor.js
  const scripts = ''

  response.send(html(content, styles, scripts))
}
