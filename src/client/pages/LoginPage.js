import React from 'react'
import css from 'styled-jsx/css'
import Page from '../components/Page'
import Window from '../components/Window'
import ButtonLink from '../components/ButtonLink'
import TwitterIcon from '../components/icons/TwitterIcon'

export default function LoginPage () {
  return (
    <Page>
      <div className={'page-centered'}>
        <Window title={'Log in'}>
          <ButtonLink href={'/auth/twitter'}>
            <TwitterIcon style={{ marginRight: 10 }} />
            Log in with Twitter
          </ButtonLink>
        </Window>
      </div>
      <style jsx>{styles}</style>
    </Page>
  )
}

const styles = css`
  .page-centered {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
