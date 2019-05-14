import Engine from './Engine'

(function () {

  const canvas = document.getElementById('game')

  window.loadWorld = function (url) {
    fetch(url)
      .then(response => response.json())
      .then(game => {
        const engine = new Engine(canvas)
        engine.load(game)
        engine.start()
      })
  }
}())
