import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../client/components/Header'
import LoginModal from '../../client/components/modals/LoginModal'

export default function UserPage () {

  const user = useSelector(state => state.user)
  const games = useSelector(state => state.games)

  return (
    <div>
      <Header />
      <h1>{user.username}</h1>
      <ul>
        {games.map(game => (
          <li key={game.slug}>
            <a href={`/${user.username}/${game.slug}`}>{game.name}</a>
          </li>
        ))}
      </ul>
      <LoginModal />
    </div>
  )
}
