import React, { useEffect } from 'react'
import useReduxState from '../hooks/useReduxState'
import { modalVisibilitySelector } from '../state/selectors'
import { setModalVisibilityAction } from '../state/actions'
import styles from './Modal.css'
import { Window } from './Panel'

export default function Modal ({ name, title, children }) {

  const [ visible, setVisible ] = useReduxState(state => modalVisibilitySelector(state, name), setModalVisibilityAction)

  const handleClose = () => setVisible(name, false)

  const closeIfEscape = (event) => {
    if (event.keyCode === 27) {
      handleClose()
    }
  }

  useEffect(() => {
    if (visible) {
      document.body.classList.add('modal-open')
      document.addEventListener('keydown', closeIfEscape, false)
    } else {
      document.body.classList.remove('modal-open')
      document.removeEventListener('keydown', closeIfEscape, false)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className={styles.container}
      onClick={handleClose}
    >
      <Window
        title={title}
        onClose={handleClose}
      >
        {children}
      </Window>
    </div>
  )
}
