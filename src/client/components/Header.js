import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import css from 'styled-jsx/css'
import { logoutAction } from '../state/actions'
import useModalVisibility from '../hooks/useModalVisibility'
import LoginModal from './modals/LoginModal'

export default function Header () {

  const [ , setVisible ] = useModalVisibility('login')

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  function logout () {
    dispatch(logoutAction())
  }

  return (
    <div className={'container'}>
      <div className={'left'}>
        <h1 className={'title'}>
          <a href={'/'}>Tiny Little Worlds</a>
        </h1>
      </div>
      <div className={'right'}>
        {user && (
          <div>
            <a href={'/dashboard'}>{user.username}</a>
            <a
              onClick={logout}
              href={'/auth/logout'}
            >Log out</a>
          </div>
        )}
        {!user && <button onClick={() => setVisible(true)}>Log in</button>}
      </div>
      <LoginModal />
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
.container {
    background-color: #deecff;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
}

.title {
    font-size: 18px;
}

.right {
    display: flex;
    flex-direction: row;
    align-items: center;
}
`
