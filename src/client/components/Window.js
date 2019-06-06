import React from 'react'
import classNames from 'classnames'
import css from 'styled-jsx/css'

export default function Window ({ title, onClose, children, className }) {

  return (
    <div className={classNames('window', className)}>
      <div className={'header'}>
        <h2>{title}</h2>
        {onClose && <button
          onClick={onClose}
          className={'close-button'}
        >
          <img src={'/icon-cross.png'} />
        </button>}
      </div>
      <div className={'body'}>
        {children}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
.window {
  background-color: #f3f8ff;
  margin: 10px;
  display: inline-block;
  box-shadow: 5px 5px 0 #809CB0;
}

@media (max-width: 425px) {
  .window {
    width: 100%;
  }
}

.header {
  background-color: #deecff;
  color: #69779b;
  border-bottom: 1px solid #b7cce2;
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  text-transform: capitalize;
  justify-content: space-between;
}

.header h2 {
  font-weight: normal;
  font-size: 14px;
}

.body {
  padding: 10px;
}

.close-button {
  -webkit-appearance: none;
  background: none;
  border: 0;
  padding: 0;
  font-size: 14px;
  margin-left: 10px;
  width: 16px;
  height: 16px;
}

.close-button img {
  display: block;
}

.close-button:hover {
  color: #b7cce2;
  cursor: pointer;
}
`
