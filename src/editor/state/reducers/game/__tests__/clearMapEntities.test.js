/* eslint-env jest */
import clearMapEntities from '../clearMapEntities'
import { clearMapEntitiesAction } from '../../../actions'

describe('clearMapEntities', () => {

  it('clears all entities of a given id', () => {

    const state = {
      levels: [
        {
          id: 1,
          entities: [
            { id: 11 },
            { id: 12 },
            { id: 12 },
            { id: 13 },
          ],
        },
      ],
    }

    const expected = {
      levels: [
        {
          id: 1,
          entities: [
            { id: 11 },
            { id: 13 },
          ],
        },
      ],
    }

    const action = clearMapEntitiesAction(12)
    const output = clearMapEntities(state, action)

    expect(output).toBe(expected)
  })

})
