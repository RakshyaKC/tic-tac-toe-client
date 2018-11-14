'use strict'
const config = require('../config.js')
const store = require('../store.js')
// get games

// create a new game
const createGame = () => {
  return $.ajax({
    url: config.apiUrl + `games`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const getGames = () => {
  console.log(store.user)
  return $.ajax({
    url: config.apiUrl + `games`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const showAGame = () => {
  // input is id. html text id is "show-a-game"
  let id = $('#show-game-id').val()
  id = parseInt(id)
  return $.ajax({
    url: config.apiUrl + `games/` + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateAGame = (event, data) => {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + `games/` + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // update with game delta
    data
  })
}

module.exports = {
  getGames,
  createGame,
  showAGame,
  updateAGame
}
