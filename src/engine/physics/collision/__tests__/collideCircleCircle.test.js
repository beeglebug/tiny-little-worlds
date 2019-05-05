/* eslint-env jest */
import collideCircleCircle from '../collideCircleCircle'
import Circle from '../../geometry/Circle'
import CollisionResponse from '../CollisionResponse'

describe('collideCircleCircle', () => {

  it('collides from the right', () => {

    const circle1 = new Circle(20, 0, 12)
    const circle2 = new Circle(0, 0, 10)
    const response = new CollisionResponse()

    const output = collideCircleCircle(circle1, circle2, response)

    expect(output).toEqual(true)
    expect(response.position.x).toBe(10)
    expect(response.position.y).toBe(0)
    expect(response.normal.x).toBe(1)
    expect(response.normal.y).toBe(0)
    expect(response.depth).toBe(2)
  })

  it('collides from the left', () => {

    const circle1 = new Circle(-20, 0, 12)
    const circle2 = new Circle(0, 0, 10)
    const response = new CollisionResponse()

    const output = collideCircleCircle(circle1, circle2, response)

    expect(output).toEqual(true)
    expect(response.position.x).toBe(-10)
    expect(response.position.y).toBe(0)
    expect(response.normal.x).toBe(-1)
    expect(response.normal.y).toBe(0)
    expect(response.depth).toBe(2)
  })

  it('collides from the top', () => {

    const circle1 = new Circle(0, -15, 8)
    const circle2 = new Circle(0, 0, 9)
    const response = new CollisionResponse()

    const output = collideCircleCircle(circle1, circle2, response)

    expect(output).toEqual(true)
    expect(response.position.x).toBe(0)
    expect(response.position.y).toBe(-9)
    expect(response.normal.x).toBe(0)
    expect(response.normal.y).toBe(-1)
    expect(response.depth).toBe(2)
  })

  it('collides from the bottom', () => {

    const circle1 = new Circle(0, 15, 8)
    const circle2 = new Circle(0, 0, 9)
    const response = new CollisionResponse()

    const output = collideCircleCircle(circle1, circle2, response)

    expect(output).toEqual(true)
    expect(response.position.x).toBe(0)
    expect(response.position.y).toBe(9)
    expect(response.normal.x).toBe(0)
    expect(response.normal.y).toBe(1)
    expect(response.depth).toBe(2)
  })
})
