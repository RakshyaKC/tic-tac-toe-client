'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

// function to start the game and start a new game with new id
const onCreateGame = event => {
  event.preventDefault()
  $('.col').html('')
  // emptying the value of all .col divs
  api.createGame()
    .then((response) => {
      ui.createGameSuccess(response)
      // turn elements in .col back on and set up eevnt listeners for the
      // clicks with callback function clickedGrid
      $('.col').on('click', clickedGrid)
      // reinitialize uniqueCount. It was stuck at the winning uniqueCount
      // without this part.
      $('.col').on('click', counter)
      $('.col').on('click', determineWinner)
      uniqueCount = 0
      count = []
    })
    .catch(ui.createGameFailure)
}

// counter function counts numbers of clicks
// Should be counting number of clicks on each individual grid only once
let uniqueCount = 0
let count = []
const counter = () => {
  const target = event.target.id
  if (count.indexOf(target) === -1) {
    // if target is not present in array count, push target into it
    count.push(target)
    // add to number of unique clicks on the grid
    uniqueCount++
  }
  // console.log(uniqueCount)
}
// clickGrid populates the board with each click
const clickedGrid = event => {
  const target = event.target.id
  const cells = store.game.cells
  // indices start at 0 so we need a constant that is target - 1 to
  // populate x & o in the right indices
  const targetIndex = target - 1
  const targetId = target.replace(/click/gi, 'section')
  // create the new id for the section we want to open.
  // console.log(targetId) is the same as console.log(event.target.id)
  // If count is odd, enter X, if count is even, enter Y
  if (uniqueCount % 2 === 0) {
    $('#whoseTurn').html(`Player O's turn`)
    $('#' + targetId).html('X')
    // gets the id of event element and sets it as the variable
    // use splice to insert x and o's at the indices of event.target.id
    cells.splice(targetIndex, 1, 'X')
    // turn off the button
    $('#' + targetId).off('click')
  } else if (uniqueCount % 2 === 1) {
    $('#whoseTurn').html(`Player X's turn`)
    $('#' + targetId).html('O')
    cells.splice(targetIndex, 1, 'O')
    // https://stackoverflow.com/questions/17097947/jquery-using-a-variable-as-a-selector
    $('#' + targetId).off('click')
  } else {
    console.log('MAYDAY MAYDAY')
  }
  console.log(cells)
  console.log(event.target.id)
  // saving the cells value for updating game
  const data = {
    'game': {
      'cell': {
        'index': targetIndex,
        'value': cells[targetIndex]
      },
      'over': false
    }
  }
  console.log(data)
}

const onUpdateAGame = event => {
  api.updateAGame()
    .then(ui.updateAGameSuccess)
    .catch(ui.updateAGameFailure)
}

const xWins = () => {
  $('#winOrTie').html('Player X wins!')
  $('#userNotification').modal('show')
  $('.col').off('click')
}
const oWins = () => {
  $('#winOrTie').html('Player O wins!')
  $('#userNotification').modal('show')
  $('.col').off('click')
}

const isTie = () => {
  $('#winOrTie').html('This game is a tie. Play again!')
  $('#userNotification').modal('show')
  $('.col').off('click')
}

const determineWinner = () => {
  const game = store.game
  // console.log(game)
  const cells = game.cells
  if (uniqueCount >= 5) {
    if ((cells[0] === 'X') && (cells[1] === 'X') && (cells[2] === 'X')) {
      xWins()
    } else if ((cells[3] === 'X') && (cells[4] === 'X') && (cells[5] === 'X')) {
      xWins()
    } else if ((cells[6] === 'X') && (cells[7] === 'X') && (cells[8] === 'X')) {
      xWins()
    } else if ((cells[0] === 'X') && (cells[3] === 'X') && (cells[6] === 'X')) {
      xWins()
    } else if ((cells[1] === 'X') && (cells[4] === 'X') && (cells[7] === 'X')) {
      xWins()
    } else if ((cells[2] === 'X') && (cells[5] === 'X') && (cells[8] === 'X')) {
      xWins()
    } else if ((cells[0] === 'X') && (cells[4] === 'X') && (cells[8] === 'X')) {
      xWins()
    } else if ((cells[2] === 'X') && (cells[4] === 'X') && (cells[6] === 'X')) {
      xWins()
    } else if ((cells[0] === 'O') && (cells[1] === 'O') && (cells[2] === 'O')) {
      oWins()
    } else if ((cells[3] === 'O') && (cells[4] === 'O') && (cells[5] === 'O')) {
      oWins()
    } else if ((cells[6] === 'O') && (cells[7] === 'O') && (cells[8] === 'O')) {
      oWins()
    } else if ((cells[0] === 'O') && (cells[3] === 'O') && (cells[6] === 'O')) {
      oWins()
    } else if ((cells[1] === 'O') && (cells[4] === 'O') && (cells[7] === 'O')) {
      oWins()
    } else if ((cells[2] === 'O') && (cells[5] === 'O') && (cells[8] === 'O')) {
      oWins()
    } else if ((cells[0] === 'O') && (cells[4] === 'O') && (cells[8] === 'O')) {
      oWins()
    } else if ((cells[2] === 'O') && (cells[4] === 'O') && (cells[6] === 'O')) {
      oWins()
    } else if (uniqueCount === 9) {
      isTie()
    }
  }
}

const onGetGames = event => {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onShowAGame = event => {
  event.preventDefault()
  api.showAGame()
    .then(ui.showAGameSuccess)
    .catch(ui.showAGameFailure)
}

// TODO:
// *for API a function to store the div values in an array called "cells" within
// "game" object.
// Nice to have
// <h1> element with ID "whoseTurn" updates with whose turn it is. Function would find the number of x and o.
// if num(x)> num(O), player {$X/O}'s turn

module.exports = {
  onCreateGame,
  counter,
  clickedGrid,
  determineWinner,
  onGetGames,
  onShowAGame,
  onUpdateAGame
}
