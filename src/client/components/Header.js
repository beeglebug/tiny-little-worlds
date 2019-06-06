import React from 'react'
import css from 'styled-jsx/css'

export default function Header ({ user }) {
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
            <a href={'/logout'}>Log out</a>
          </div>
        )}
        {!user && <a href={'/login'}>Log in</a>}
      </div>
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
