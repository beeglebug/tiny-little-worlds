import React, { useEffect } from 'react'
import styles from './ResizeLevelModal.css'
import Modal from '../Modal'
import Button from '../Button'

export default function ResizeLevelModal () {
  return (
    <Modal
      name={'resizeLevel'}
      title={'Resize Level'}
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
                type={'text'}
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
                type={'text'}
              />
            </td>
          </tr>
          {/* TODO crop options */}
        </tbody>
        <Button>Resize</Button>
      </table>
    </Modal>
  )
}
