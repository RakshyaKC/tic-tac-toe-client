'use strict'
// ENTRY POINT for things that require event listeners and handles callbacks

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  // clicking on 'Sign up!' submit button is our event.
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // Game engine logic below here. Authorization above works so far
  $('#new-game').on('submit', gameEvents.onCreateGame)
  // event listeners for each grid being clicked
  $('.col').on('click', gameEvents.clickedGrid)
  $('.col').on('click', gameEvents.counter)
  $('.col').on('click', gameEvents.determineWinner)
  $('#get-games').on('click', gameEvents.onGetGames)
  $('#create-game').on('click', gameEvents.onCreateGame)
  $('#show-a-game').on('click', gameEvents.onShowAGame)
})
