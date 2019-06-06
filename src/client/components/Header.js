import React, { useState } from 'react'
import css from 'styled-jsx/css'
import LoginModal from './modals/LoginModal'

export default function Header ({ user }) {

  const [ visible, setVisible ] = useState(false)

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
            <div>{user.username}</div>
            <a href={'/auth/logout'}>Log out</a>
          </div>
        )}
        {!user && <button onClick={() => setVisible(true)}>Log in</button>}
      </div>
      <LoginModal
        visible={visible}
        onClose={() => setVisible(false)}
      />
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
