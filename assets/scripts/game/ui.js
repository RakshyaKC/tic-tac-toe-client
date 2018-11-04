'user strict'
const store = require('../store.js')

const showGameboard = () => {
  const x = document.getElementById('gameboard')
  x.style.display = 'block'
}

const createGameSuccess = response => {
  store.game = response.game
  // put the game object in store
  console.log('createGameSuccess ran. Game is: ', response.game)
  console.log(response.game.cells)
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

module.exports = {
  getGamesSuccess,
  getGamesFailure,
  createGameSuccess,
  createGameFailure,
  showAGameSuccess,
  showAGameFailure
}
