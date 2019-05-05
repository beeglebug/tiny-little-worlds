/* eslint-env jest */
import closestPointCircle from '../closestPointCircle'
import Vector2 from '../geometry/Vector2'
import Circle from '../geometry/Circle'

describe('closestPointCircle', () => {

  it('calculates from the left', () => {

    const point = new Vector2(-20, 0)
    const circle = new Circle(0, 0, 10)

    const output = closestPointCircle(point, circle)

    expect(output.x).toBe(-10)
    expect(output.y).toBe(0)
  })

  it('calculates from the right', () => {
    const point = new Vector2(20, 0)
    const circle = new Circle(0, 0, 10)

    const output = closestPointCircle(point, circle)

    expect(output.x).toBe(10)
    expect(output.y).toBe(0)
  })

  it('calculates from the top', () => {
    const point = new Vector2(0, -20)
    const circle = new Circle(0, 0, 10)

    const output = closestPointCircle(point, circle)

    expect(output.x).toBe(0)
    expect(output.y).toBe(-10)
  })

  it('calculates from the bottom', () => {
    const point = new Vector2(0, 20)
    const circle = new Circle(0, 0, 10)

    const output = closestPointCircle(point, circle)

    expect(output.x).toBe(0)
    expect(output.y).toBe(10)
  })

  it('calculates from inside', () => {
    const point = new Vector2(5, 6)
    const circle = new Circle(0, 0, 10)

    const output = closestPointCircle(point, circle)

    expect(output.x).toBe(5)
    expect(output.y).toBe(6)
  })
})
