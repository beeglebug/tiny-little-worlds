import React from 'react'
import Window from '../Panel'
import ExternalLink from '../ExternalLink'
import styles from './AboutWindow.css'

export default function AboutWindow () {
  return (
    <Window
      name={'about'}
      title={'about'}
      className={styles.aboutPanel}
    >
      <h2>What is this?</h2>
      <p>Tiny Little Worlds is a set of tools for creating small first person games, think <ExternalLink href={'https://ledoux.itch.io/bitsy'}>bitsy</ExternalLink>, but in 3D</p>
      <p>It&apos;s pretty early at this point, but being actively developed. New features are being added all the time, so keep checking back!</p>
      <p>If you find any bugs or have any ideas or suggestions, either let me know on <ExternalLink href={'http://twitter.com/beeglebug'}>twitter</ExternalLink> or raise an issue on <ExternalLink href={'http://github.com/beeglebug/tiny-little-worlds'}>github</ExternalLink>.</p>
    </Window>
  )
}
