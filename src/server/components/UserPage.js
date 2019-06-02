import React from 'react'
import Header from '../../ui/components/Header'

export default function UserPage ({ user, games }) {
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
    </div>
  )
}
