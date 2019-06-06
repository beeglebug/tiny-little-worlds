import React from 'react'
import css from 'styled-jsx/css'

export default function ButtonLink ({ children, href }) {
  return (
    <a
      className={'button'}
      href={href}
    >
      {children}
      <style jsx>{styles}</style>
    </a>
  )
}

const styles = css`
.button {
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 10px;
  background-color: #deecff;
  font-size: 14px;
  color: #69779b;
  border: 1px solid #b7cce2;
  text-transform: capitalize;
  text-decoration: none;
}
`
