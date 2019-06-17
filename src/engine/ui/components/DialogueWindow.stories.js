import React from 'react'
import { storiesOf } from '@storybook/react'
import Input from '../../input/Input'
import KeyCode from '../../input/KeyCode'
import DialogueWindow from './DialogueWindow'

const controls = {
  interact: Input.createButton('interact', KeyCode.E),
}

storiesOf('DialogueWindow', module)
  .add('default', () => {
    const dialogue = 'hello this is some text'
    return (
      <DialogueWindow
        visible={true}
        dialogue={dialogue}
        controls={controls}
      />
    )
  })
