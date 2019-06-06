import React from 'react'
import Page from '../components/Page'
import Window from '../components/Window'
import ButtonLink from '../components/ButtonLink'

export default function LoginPage () {
  return (
    <Page>
      <Window title={'Log in'}>
        <ButtonLink href={'/auth/twitter'}>Log in with Twitter</ButtonLink>
      </Window>
    </Page>
  )
}
