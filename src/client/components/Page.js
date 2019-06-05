import React from 'react'
import css from 'styled-jsx/css'

export default function Page ({ children }) {
  return (
    <div className={'page'}>
      {children}
      <style jsx>{styles}</style>
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

const styles = css`
.page {
  height: 100%;
}
`
