import React from 'react'
import styles from './UI.css'
import DialogueWindow from './DialogueWindow'

export default class UI extends React.Component {

  state = {
    visible: false,
    dialogue: null,
  }

  showDialogue (dialogue) {
    this.setState({
      visible: true,
      dialogue,
    })
  }

  render () {
    const { visible, dialogue } = this.state
    return (
      <div className={styles.container}>
        {visible && <DialogueWindow text={dialogue} />}
      </div>
    )
  }
}
