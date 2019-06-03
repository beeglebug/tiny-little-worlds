import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import css from 'styled-jsx/css'
import Window from './Window'

export default function Modal ({ visible, title, children, onClose }) {

  useEffect(() => {
    const closeIfEscape = (event) => {
      if (event.keyCode !== 27) return
      onClose()
    }
    if (visible) {
      document.body.classList.add('modal-open')
      document.addEventListener('keydown', closeIfEscape, false)
    } else {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', closeIfEscape, false)
    }
  }, [onClose, visible])

  if (!visible) return null

  const capture = event => {
    event.stopPropagation()
  }

  return createPortal((
    <div
      className={'modal-background'}
      onMouseDown={onClose}
    >
      <div onMouseDown={capture}>
        <Window
          title={title}
          onClose={onClose}
          className={windowCss.className}
        >
          {children}
        </Window>
      </div>
      <style jsx>{backgroundStyles}</style>
      {windowCss.styles}
    </div>
  ), document.body)
}

const backgroundStyles = css`
.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
}
`

const windowCss = css.resolve`
  .window {
    box-shadow: none;
  }
`
