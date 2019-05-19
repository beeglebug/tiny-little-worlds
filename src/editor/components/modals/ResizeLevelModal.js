import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../Modal'
import Button from '../Button'
import { resizeMapAction } from '../../state/actions'
import useModalVisibility from '../../hooks/useModalVisibility'

export default function ResizeLevelModal () {

  const [ visible, setVisible ] = useModalVisibility('resizeLevel')
  const level = useSelector(state => state.game.levels[state.currentLevel])
  const dispatch = useDispatch()
  const [ width, setWidth ] = useState(level && level.width)
  const [ height, setHeight ] = useState(level && level.height)

  const handleSave = () => {
    dispatch(resizeMapAction(width, height))
    setVisible(false)
  }

  return (
    <Modal
      title={'Resize Level'}
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor={'level_width'}>width</label>
            </td>
            <td>
              <input
                id={'level_width'}
                type={'number'}
                value={width}
                onChange={e => setWidth(e.target.value)}
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
                type={'number'}
                value={height}
                onChange={e => setHeight(e.target.value)}
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
