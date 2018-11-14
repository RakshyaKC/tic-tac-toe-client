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
  const cells = store.game.cells
  $('#cell1').html(cells[0])
  $('#cell2').html(cells[1])
  $('#cell3').val(cells[2])
  $('#cell4').val(cells[3])
  $('#cell5').val(cells[4])
  $('#cell6').val(cells[5])
  $('#cell7').val(cells[6])
  $('#cell8').val(cells[7])
  $('#cell9').val(cells[8])
  $('#show-game').modal('show')
  console.log('showAGameSuccess ran. Game is: ', game)
  console.log(cells.length)
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
