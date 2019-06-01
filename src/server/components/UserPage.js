import React from 'react'

export default function UserPage ({ user, games }) {
  return (
    <div>
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
