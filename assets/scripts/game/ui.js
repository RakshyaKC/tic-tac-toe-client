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
  console.log('getGamesSuccess ran. Game is: ', game)
  $('#get-all-the-games').html(`You have played ${game.games.length} games. Enter a specific ID to see that game.`)
  $('#get-all-games').modal('show')
}

const getGamesFailure = error => {
  console.log('getGamesFailure ran. Error is: ', error)
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
