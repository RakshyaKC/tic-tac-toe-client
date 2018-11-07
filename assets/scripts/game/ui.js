'user strict'
const store = require('../store.js')

const showGameboard = () => {
  const x = document.getElementById('gameboard')
  x.style.display = 'block'
}

const createGameSuccess = event => {
  store.game = event.game
  // put the game object in store
  console.log('createGameSuccess ran. Game is: ', event.game)
  console.log(event.game.id)
  showGameboard()
}

const getGamesSuccess = game => {
  console.log('getGamesSuccess ran. Game is: ', game)
}

const getGamesFailure = error => {
  console.log('getGamesFailure ran. Error is: ', error)
}

const createGameFailure = error => {
  console.log('createGameFailure ran. Error is: ', error)
}
const showAGameSuccess = game => {
  console.log('showAGameSuccess ran. Game is: ', game)
}

const showAGameFailure = error => {
  console.log('showAGameFailure ran. Error is: ', error)
}

const updateAGameSuccess = game => {
  console.log('updateAGameSuccess ran. Game is: ', game)
}

const updateAGameFailure = error => {
  console.log('updateAGameFailure ran. Error is: ', error)
}

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  createGameSuccess,
  createGameFailure,
  showAGameSuccess,
  showAGameFailure,
  updateAGameFailure,
  updateAGameSuccess
}
