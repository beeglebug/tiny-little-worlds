import React from 'react'
import Modal from '../Modal'

export default function LoginModal ({ visible, onClose }) {
  return (
    <Modal
      title={'Login'}
      visible={visible}
      onClose={onClose}
    >
      <a href={'/auth/twitter'}>Log in with Twitter</a>
    </Modal>
  )
}
