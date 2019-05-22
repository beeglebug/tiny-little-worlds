import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../Modal'
import Button from '../Button'
import { resizeMapAction } from '../../state/actions'
import useModalVisibility from '../../hooks/useModalVisibility'
import styles from './ResizeLevelModal.css'

export default function ResizeLevelModal () {

  const [ visible, setVisible ] = useModalVisibility('resizeLevel')
  const level = useSelector(state => state.game.levels[state.currentLevel])
  const dispatch = useDispatch()
  const [ width, setWidth ] = useState(level && level.width)
  const [ height, setHeight ] = useState(level && level.height)

  const handleSave = () => {
    // TODO warn if this will delete tiles
    dispatch(resizeMapAction(parseInt(width), parseInt(height)))
    setVisible(false)
  }

  return (
    <Modal
      title={'Resize Level'}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>
              <label htmlFor={'level_width'}>width</label>
            </td>
            <td>
              <input
                id={'level_width'}
                className={styles.input}
                type={'number'}
                value={width}
                onChange={e => setWidth(e.target.value)}
                autoFocus={true}
                onKeyDown={onPressEnter(handleSave)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor={'level_height'}>height</label>
            </td>
            <td>
              <input
                id={'level_height'}
                className={styles.input}
                type={'number'}
                value={height}
                onChange={e => setHeight(e.target.value)}
                onKeyDown={onPressEnter(handleSave)}
              />
            </td>
          </tr>
          {/* TODO crop options */}
        </tbody>
      </table>
      <Button onClick={handleSave}>Resize</Button>
    </Modal>
  )
}

const onPressEnter = callback => event => {
  if (event.keyCode !== 13) return
  event.preventDefault()
  event.stopPropagation()
  callback()
}
