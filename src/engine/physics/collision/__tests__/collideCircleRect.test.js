/* eslint-env jest */
import collideCircleRect from '../collideCircleRect'
import Circle from '../../geometry/Circle'
import Rect from '../../geometry/Rect'
import CollisionResponse from '../CollisionResponse'

describe('collideCircleRect', () => {

  it('collides from the right', () => {

    const circle = new Circle(22, 11, 5)
    const rect = new Rect(0, 0, 20, 20)
    const response = new CollisionResponse()

    const output = collideCircleRect(circle, rect, response)

    expect(output).toEqual(true)
    expect(response.position.x).toBe(20)
    expect(response.position.y).toBe(11)
    expect(response.normal.x).toBe(1)
    expect(response.normal.y).toBe(0)
    expect(response.depth).toBe(3)
  })

  it('collides from the left', () => {

    const circle = new Circle(-2, 11, 5)
    const rect = new Rect(0, 0, 20, 20)
    const response = new CollisionResponse()

    const output = collideCircleRect(circle, rect, response)

    expect(output).toEqual(true)
    expect(response.position.x).toBe(0)
    expect(response.position.y).toBe(11)
    expect(response.normal.x).toBe(-1)
    expect(response.normal.y).toBe(0)
    expect(response.depth).toBe(3)
  })

  it('collides from the top', () => {

    const circle = new Circle(12, -3, 5)
    const rect = new Rect(0, 0, 20, 20)
    const response = new CollisionResponse()

    const output = collideCircleRect(circle, rect, response)

    expect(output).toEqual(true)
    expect(response.position.x).toBe(12)
    expect(response.position.y).toBe(0)
    expect(response.normal.x).toBe(0)
    expect(response.normal.y).toBe(-1)
    expect(response.depth).toBe(2)
  })

  it('collides from the bottom', () => {

    const circle = new Circle(12, 23, 5)
    const rect = new Rect(0, 0, 20, 20)
    const response = new CollisionResponse()

    const output = collideCircleRect(circle, rect, response)

    expect(output).toEqual(true)
    expect(response.position.x).toBe(12)
    expect(response.position.y).toBe(20)
    expect(response.normal.x).toBe(0)
    expect(response.normal.y).toBe(1)
    expect(response.depth).toBe(2)
  })
})
