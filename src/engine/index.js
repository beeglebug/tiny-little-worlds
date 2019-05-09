import Game from './Game'

const canvas = document.getElementById('game')

const game = new Game(canvas)

const map = {
  width: 8,
  height: 8,
  data: [
    2,2,2,2,2,2,2,2,
    2,3,1,1,1,1,1,2,
    2,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,2,
    2,1,1,1,1,1,1,2,
    2,2,2,2,2,2,2,2,
  ],
}

game.load(map)

const button = document.getElementById('start')

button.addEventListener('click', () => game.start())
