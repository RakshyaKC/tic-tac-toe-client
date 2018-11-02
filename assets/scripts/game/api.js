'use strict'
const config = require('../config.js')
const store = require('../store.js')

// create a new game
// POST 401 unauthorized error
const startNewGame = () => {
  console.log(store.user.token)
  return $.ajax({
    url: config.apiUrl + `games`,
    method: 'POST',
    header: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  startNewGame
}
