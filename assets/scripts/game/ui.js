'user strict'
const store = require('../store.js')

const getGamesSuccess = game => {
  console.log('getGamesSuccess ran. Game is: ', game)
}

const getGamesFailure = error => {
  console.log('getGamesFailure ran. Error is: ', error)
}
const createGameSuccess = game => {
  console.log('createGameSuccess ran. Game is: ', game)
  // put the game object in store
  store.game = game
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
