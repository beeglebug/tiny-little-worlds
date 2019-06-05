import React from 'react'
import Header from '../components/Header'
import Page from '../components/Page'

export default function EditPage ({ world }) {
  return (
    <Page>
      <Header />
      Editor for {world.name}
    </Page>
  )
}
