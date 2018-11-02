'use strict'
const config = require('../config.js')
const store = require('../store.js')
// get games

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

// create a new game
// POST 401 unauthorized error
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

const showAGame = (id) => {
  return $.ajax({
    url: config.apiUrl + `/games/:${id}`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  getGames,
  createGame,
  showAGame
}
