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
  showGameboard()
}
const createGameFailure = error => {
  console.log('createGameFailure ran. Error is: ', error)
}

const getGamesSuccess = game => {
  // console.log('getGamesSuccess ran. Game is: ', game)
  $('#get-all-the-games').html('All the games are here', game)
  $('#get-all-games').modal('show')
}

const getGamesFailure = error => {
  console.log('getGamesFailure ran. Error is: ', error)
}

const showAGameSuccess = game => {
  $('#show-this-game').html('Here is how this game went')
  $('#cell1').html('')
  $('#cell2').html('')
  $('#cell3').html('')
  $('#cell4').html('')
  $('#cell5').html('')
  $('#cell6').html('')
  $('#cell7').html('')
  $('#cell8').html('')
  $('#cell9').html('')
  $('#show-game').modal('show')
  // console.log('showAGameSuccess ran. Game is: ', game)
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
