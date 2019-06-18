import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import Input from '../../input/Input'
import KeyCode from '../../input/KeyCode'
import DialogueWindow from './DialogueWindow'

const controls = {
  interact: Input.createButton('interact', KeyCode.E),
}

storiesOf('DialogueWindow', module)
  .add('single line', () => {
    const dialogue = 'hello this is some text'
    return (
      <WithState
        dialogue={dialogue}
        controls={controls}
      />
    )
  })
  .add('multi line', () => {
    const dialogue = `short first line
and now a longer second line`
    return (
      <WithState
        dialogue={dialogue}
        controls={controls}
      />
    )
  })

function WithState ({ dialogue, controls }) {

  const [ visible, setVisible ] = useState(true)

  if (!visible) return null

  return (
    <DialogueWindow
      dialogue={dialogue}
      controls={controls}
      onFinish={() => setVisible(false)}
    />
  )
}
