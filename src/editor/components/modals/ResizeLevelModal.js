import React, { useEffect } from 'react'
import { Window } from '../Panel'
import Button from '../Button'
import useReduxState from '../../hooks/useReduxState'
import { modalVisibilitySelector } from '../../state/selectors'
import { setModalVisibilityAction } from '../../state/actions'
import styles from './ResizeLevelModal.css'

export default function ResizeLevelModal () {
  return (
    <Modal
      name={'resizeLevel'}
      title={'Resize Level'}
    >
      content
    </Modal>
  )
}

function Modal ({ name, title, children }) {

  const [ visible, setVisible ] = useReduxState(state => modalVisibilitySelector(state, name), setModalVisibilityAction)

  useModalOpenClass(visible)

  if (!visible) return null

  const handleClose = () => setVisible(name, false)

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

function useModalOpenClass (visible) {
  useEffect(() => {
    if (visible) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }, [visible])
}
