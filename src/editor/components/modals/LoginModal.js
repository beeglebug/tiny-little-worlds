import React from 'react'
import Modal from '../Modal'
import useModalVisibility from '../../hooks/useModalVisibility'

export default function LoginModal () {

  const [ visible, setVisible ] = useModalVisibility('login')

  return (
    <Modal
      title={'Login'}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <a href={'/auth/twitter'}>Log in with Twitter</a>
    </Modal>
  )
}
