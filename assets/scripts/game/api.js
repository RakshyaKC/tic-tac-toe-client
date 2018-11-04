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
  const id = $('#show-game-id').val()
  console.log(id)
  // input is id. html text id is "show-a-game"
  return $.ajax({
    url: config.apiUrl + `games/${id}`,
    //
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
    // would it help to set data.id =  .show-a-game.html()
  })
}
module.exports = {
  getGames,
  createGame,
  showAGame
}
