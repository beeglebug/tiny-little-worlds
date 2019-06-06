import React from 'react'
import css from 'styled-jsx/css'
import Header from './Header'

export default function Page ({ user, children }) {
  return (
    <div className={'page'}>
      <div id={'mount'}>
        <Header user={user} />
      </div>
      {children}
      <style jsx>{bodyStyles}</style>
    </div>
  )
}

const bodyStyles = css.global`
  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    background-color: #90afc5;
  }
  body, button, input, textarea {
    font-size: 14px;
    font-family: Helvetica, sans-serif;
    color: #69779b;
  }
  h1, h2, h3 {
    margin: 0;
  }
  #root {
    height: 100%;
  }
  @font-face {
    font-family: m5x7;
    src: url('/m5x7.ttf');
    font-weight: 400;
  }
  body.modal-open {
    overflow: hidden;
  }
`
