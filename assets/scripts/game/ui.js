'user strict'
const store = require('../store.js')

const showGameboard = () => {
  const x = document.getElementById('gameboard')
  x.style.display = 'block'
}

const createGameSuccess = event => {
  store.game = event.game
  // put the game object in store
  $('#gameID').html(`Game ID: ${event.game.id}`)
  showGameboard()
}
const createGameFailure = () => {
  $('#get-all-the-games').html(`Sorry a game could not be created. Try again.`)
  $('#show-game').modal('show')
  // console.log('createGameFailure ran. Error is: ', error)
}

const getGamesSuccess = game => {
  console.log('getGamesSuccess ran. Game is: ', game)
  $('#get-all-the-games').html(`You have played ${game.games.length} games.`)
  $('#get-all-games').modal('show')
}

const getGamesFailure = () => {
  $('#get-all-the-games').html(`Sorry I don't know how many games you have played.`)
  $('#get-all-games').modal('show')
  // console.log('getGamesFailure ran. Error is: ', error)
}

const showAGameSuccess = game => {
  // console.log('showAGameSuccess ran. Game is: ', game)
  const cells = game.game.cells
  $('#cell1').html(cells[0])
  $('#cell2').html(cells[1])
  $('#cell3').html(cells[2])
  $('#cell4').html(cells[3])
  $('#cell5').html(cells[4])
  $('#cell6').html(cells[5])
  $('#cell7').html(cells[6])
  $('#cell8').html(cells[7])
  $('#cell9').html(cells[8])
  $('#show-this-game').html('Here is how this game went')
  $('#show-game').modal('show')
}

const showAGameFailure = error => {
  $('#show-this-game').html(`This game cannot be loaded. Error is "${error.statusText}"`)
  $('#show-game').modal('show')
  // console.log('showAGameFailure ran. Error is: ', error)
}

const updateAGameSuccess = game => {
//  console.log('updateAGameSuccess ran. Game is: ', game)
}

const updateAGameFailure = () => {
//  console.log('updateAGameFailure ran. Error is: ', error)
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
