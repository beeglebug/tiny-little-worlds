import React from 'react'
import Header from '../../components/Header'
import GamePreview from '../../components/GamePreview'

export default function UserPage ({ user, games = [] }) {
  return (
    <div>
      <Header />
      <div>
        <h2>worlds by {user.username}</h2>
        <div>
          {games.map(game => (
            <GamePreview
              key={game._id}
              {...game}
              user={user}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
