import React from 'react'
import Page from '../components/Page'

export default function CreatePage ({ user }) {
  return (
    <Page
      user={user}
      id="editor"
    >
      loading editor...
    </Page>
  )
}
