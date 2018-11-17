'user strict'
const store = require('../store.js')

const showGameboard = () => {
  const x = document.getElementById('gameboard')
  x.style.display = 'block'
}

const createGameSuccess = event => {
  store.game = event.game
  $('#authedMessage').html('')
  // put the game object in store
  $('#gameID').html(`Game ID: ${event.game.id}`)
  showGameboard()
}
const createGameFailure = () => {
  $('#authedMessage').html('')
  $('#get-all-the-games').html(`Sorry a game could not be created. Try again.`)
  $('#show-game').modal('show')
  // console.log('createGameFailure ran. Error is: ', error)
}

const getGamesSuccess = game => {
  $('#authedMessage').html('')
  // console.log('getGamesSuccess ran. Game is: ', game)
  let gamesIDs = []
  for (let i = 0; i < game.games.length; i++) {
    const gameID = game.games[i].id
    gamesIDs.push(gameID)
  }
  gamesIDs = gamesIDs.join(', ')
  $('#get-all-the-games').html(`You have played ${game.games.length} games. See all their IDs below.`)
  $('#get-all-games').modal('show')
  $('#all-games-IDs').html(`Game IDs: ${gamesIDs}`)
}

const getGamesFailure = () => {
  $('#authedMessage').html('')
  $('#get-all-the-games').html(`Sorry I don't know how many games you have played.`)
  $('#get-all-games').modal('show')
  // console.log('getGamesFailure ran. Error is: ', error)
}

const resetShowAGame = () => {
  const x = document.getElementById('show-game-form')
  x.reset()
}

const showAGameSuccess = game => {
  // console.log('showAGameSuccess ran. Game is: ', game)
  $('#authedMessage').html('')
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
  $('#this-game-table').show()
  $('#show-this-game').html(`Here is how game ${game.game.id} went`)
  $('#show-game').modal('show')
  resetShowAGame()
}

const showAGameFailure = error => {
  $('#authedMessage').html('')
  $('#this-game-table').hide()
  $('#show-this-game').html(`Sorry this game could not be loaded. Error: ${error.statusText}`)
  $('#show-game').modal('show')
  resetShowAGame()
  // console.log('showAGameFailure ran. Error is: ', error)
}

const updateAGameSuccess = game => {
  $('#authedMessage').html('')
//  console.log('updateAGameSuccess ran. Game is: ', game)
}

const updateAGameFailure = () => {
  $('#authedMessage').html('')
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
