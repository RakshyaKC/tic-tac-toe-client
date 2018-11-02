'use strict'
const config = require('../config.js')
const store = require('../store.js')
// get games
const getGames = () => {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'GET',
    header: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

// create a new game
// POST 401 unauthorized error
const createGame = () => {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'POST',
    header: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const showAGame = () => {
  return $.ajax({
  //  url: config.apiUrl + `/games/:${id}`,
    method: 'POST',
    header: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  getGames,
  createGame,
  showAGame
}
