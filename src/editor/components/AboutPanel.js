import React from 'react'
import Panel from './Panel'

export default function AboutPanel () {
  return (
    <Panel title={'about'}>
      <h2>What is this?</h2>
      <p>Tiny Little Worlds is a set of tools for creating small first person games, think <a href="https://ledoux.itch.io/bitsy">bitsy</a>, but in 3D</p>
      <p>It&apos;s pretty early at this point, but being actively developed. New features are being added all the time, but this does mean it&apos;s likely to be broken at any given moment, sorry!</p>
      <p>If you find any bugs or have any ideas or suggestions, either let me know on <a href="http://twitter.com/beeglebug">twitter</a> or raise an issue on <a href="http://github.com/beeglebug/tiny-little-world">github</a> and i&apos;ll do my best!</p>
    </Panel>
  )
}
