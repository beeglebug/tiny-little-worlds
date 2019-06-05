import React from 'react'
import Header from '../components/Header'

export default function EditPage ({ world }) {
  return (
    <div>
      <Header />
      Editor for {world.name}
    </div>
  )
}
