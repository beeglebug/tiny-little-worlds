import React from 'react'
import { renderToString } from 'react-dom/server'
import { flushToHTML } from 'styled-jsx/server'
import html from '../templates/index.html'
import LoginPage from '../../client/pages/LoginPage'

export default async function (request, response) {

  const content = renderToString(
    <LoginPage />
  )

  const styles = flushToHTML()

  response.send(html(content, styles))
}
