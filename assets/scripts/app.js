'use strict'
// ENTRY POINT for things that require event listeners and handles callbacks

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // Game engine logic below here
  $('#get-games').on('click', gameEvents.onGetGames)
  $('#create-a-game').on('click', gameEvents.onCreateGame)
  $('#show-a-game').on('click', gameEvents.onShowAGame)
})
