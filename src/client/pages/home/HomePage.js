import React from 'react'
import { useSelector } from 'react-redux'
import css from 'styled-jsx/css'
import Header from '../../components/Header'

export default function HomePage () {

  const worlds = useSelector(state => state.games)

  return (
    <div>
      <Header />
      <main className={'container'}>
        <h2>latestest worlds</h2>
        <div>
          {worlds.map(world => (
            <WorldPreview
              key={world._id}
              {...world}
            />
          ))}
        </div>
      </main>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`
  .container {
    width: 1024px;
  }
`

function WorldPreview ({ user, name, description, slug }) {
  return (
    <div>
      <div>
        <a
          className='thumbnail'
          href={`/${user.slug}/${slug}`}
        >
          <img src={'/250x200.png'} />
        </a>
      </div>
      <a href={`/${user.slug}/${slug}`}>
        <h3>{name}</h3>
      </a>
      <div>{description}</div>
    </div>
  )
}
