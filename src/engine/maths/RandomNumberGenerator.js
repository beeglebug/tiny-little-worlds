import MersenneTwister from 'mersenne-twister'

export default class RandomNumberGenerator {

  constructor (seed = +new Date) {
    this.generator = new MersenneTwister(seed)
  }

  random () {
    return this.generator.random()
  }

  randomBetween (min, max) {
    return this.generator.random() * (max - min + 1) + min
  }

  randomIntBetween (min, max) {
    return Math.floor(this.generator.random() * (max - min + 1) + min)
  }

  randomItemFromArray (arr) {
    return arr[this.randomIntBetween(0, arr.length - 1)]
  }
}
