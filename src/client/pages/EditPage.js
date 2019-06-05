import React from 'react'
import Page from '../components/Page'

export default function EditPage ({ world }) {
  return (
    <Page>
      Editor for {world.name}
    </Page>
  )
}
