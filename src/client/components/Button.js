import React, { Fragment } from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'

export default function Button ({ children, selected, onClick }) {
  return (
    <Fragment>
      <button
        className={classnames('button', { selected })}
        onClick={onClick}
      >
        {children}
      </button>
      <style jsx>{styles}</style>
    </Fragment>
  )
}

const styles = css`
.button {
    -webkit-appearance: none;
    height: 32px;
    padding: 0 10px;
    background-color: #deecff;
    margin-right: 10px;
    font-size: 14px;
    color: #69779b;
    border: 1px solid #b7cce2;
    text-transform: capitalize;
}

.button:active {
    background-color: #d9e6f9;
}

.button:last-child {
    margin-right: 0;
}

.selected {
    background-color: #69779b;
    color: #deecff;
}
`
